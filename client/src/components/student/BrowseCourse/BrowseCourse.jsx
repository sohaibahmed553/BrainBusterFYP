import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "antd";
import { getCoursesPageData } from "../../../actions";

const BrowseCourse = () => {
    const coursesPageData = useSelector(
        (state) => state.studentData.coursesPageData
    );

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        // dispatch;
        dispatch(getCoursesPageData());
    }, [dispatch]);

    return (
        <div style={{ backgroundColor: "#F5F6F7" }}>
            {coursesPageData &&
                coursesPageData.map((course, index) => (
                    <div key={index}>
                        <div
                            key={course.CourseID}
                            className="col-12"
                            // style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px" }}
                        >
                            <div
                                className="row p-4"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    history.push(
                                        `/student/singlecourse?courseid=${course.CourseID}`
                                    )
                                }
                            >
                                <div className="col-md-4">
                                    <Avatar
                                        shape="square"
                                        size="large"
                                        src={
                                            "http://localhost:4000/" +
                                            course.CAvatar
                                        }
                                        style={{
                                            width: "100%",
                                            height: "180px",
                                        }}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <h3>{course.CourseName}</h3>
                                    <p>Instructor : {course.NickName}</p>
                                    <p>{course.CourseDescription}</p>
                                </div>
                            </div>
                        </div>
                        <hr style={{ color: "black" }} className="ml-5 mr-5" />
                    </div>
                ))}
        </div>
    );
};

export default BrowseCourse;
