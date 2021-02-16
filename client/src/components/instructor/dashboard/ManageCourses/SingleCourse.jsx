import React from "react";
import { Button, Modal, message } from "antd";
import axios from "axios";

import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const SingleCourse = (props) => {
    const checkAllowed = async () => {
        let allow;
        await axios
            .get(
                "http://localhost:4000/api/courses/allow/" + props.data.CourseID
            )
            .then((res) => {
                allow = res.data.allow;
            });
        return allow;
    };

    const changeCourseStatus = async () => {
        if (await checkAllowed()) {
            await axios
                .put(
                    "http://localhost:4000/api/courses/status/" +
                        props.data.CourseID
                )
                .then((res) => {
                    message.success("You course is now online.");
                    props.loadData();
                });
        } else {
            message.warning(
                "There should be atleast 15 questions in every difficulty of every stage to online this course."
            );
        }
    };

    const toogleOnline = () => {
        confirm({
            title: "Warning...",
            icon: <ExclamationCircleOutlined />,
            content:
                "You can't revert this change and no one can do any further changes in this course.",
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                axios
                    .get(
                        "http://localhost:4000/api/courses/countstages/" +
                            props.data.CourseID
                    )
                    .then((res) => {
                        if (res.data[0].totalStages >= 5) {
                            changeCourseStatus();
                        } else {
                            message.warning(
                                "Add atleast 5 stages to online your course."
                            );
                        }
                    });
            },
            onCancel() {
                console.log("Cancel");
            },
        });
    };

    const toogleOffline = () => {
        message.warning("You can't change the online course.");
    };

    const statusButton = (status) => {
        if (status)
            return (
                <Button type="primary" onClick={toogleOffline}>
                    online
                </Button>
            );
        else
            return (
                <Button type="primary" danger onClick={toogleOnline}>
                    offline
                </Button>
            );
    };

    return (
        <tr>
            <td className="align-middle ">{props.data.CourseName}</td>
            <td className="align-middle ">{props.data.Code}</td>
            <td className="align-middle ">{statusButton(props.data.status)}</td>
            {console.log(props.data)}
        </tr>
    );
};

export default SingleCourse;
