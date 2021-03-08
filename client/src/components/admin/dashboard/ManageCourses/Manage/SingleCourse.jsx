import React from "react";
import { Badge } from "antd";

const SingleCourse = (props) => {
  /*
    const checkAllowed = async () => {
        let allow;
        await axios
            .get(
                "/api/courses/allow/" + props.data.CourseID
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
                    "/api/courses/status/" +
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
                        "/api/courses/countstages/" +
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
*/
  const statusBadge = (status) => {
    if (status) return <Badge status="success" text="Online" />;
    else return <Badge status="error" text="Offline" />;
  };

  return (
    <tr>
      <td className="text-center">{props.data.CourseName}</td>
      <td className="text-center ">{props.data.Code}</td>
      <td className="text-center ">{statusBadge(props.data.Status)}</td>
    </tr>
  );
};

export default SingleCourse;
