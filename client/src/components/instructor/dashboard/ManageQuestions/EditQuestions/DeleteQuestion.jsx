import React from "react";
import "antd/dist/antd.css";
import { Modal, Button, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const { confirm } = Modal;

const DeleteQuestion = (props) => {
    const showDeleteConfirm = () => {
        confirm({
            title: "Are you sure delete this question?",
            icon: <ExclamationCircleOutlined />,
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                axios
                    .get(
                        "http://localhost:4000/api/questions/count/" +
                            props.data.StID +
                            "/" +
                            props.data.Difficulty
                    )
                    .then((res) => {
                        console.log(res.data.noofquestions);

                        if (res.data.noofquestions !== 15) {
                            axios
                                .delete(
                                    "http://localhost:4000/api/questions/" +
                                        props.data.QID
                                )
                                .then((res) => {
                                    message.success(
                                        "Question has been deleted."
                                    );
                                    props.onDeleteQuestions();
                                });
                        } else {
                            message.warning(
                                "No of questions can not be lower that 15 in this difficulty."
                            );
                        }
                    });
            },
            onCancel() {
                console.log("Cancel");
            },
        });
    };

    return (
        <div>
            <Button onClick={showDeleteConfirm} type="link">
                delete
            </Button>
        </div>
    );
};

export default DeleteQuestion;
