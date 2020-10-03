import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Avatar, Collapse, Empty } from "antd";
import axios from "axios";
import { getSingleCoursePageData } from "../../../actions/studentDataActions";

const { Panel } = Collapse;

const SingleCourse = ({ studentBio }) => {
    const singleCoursePageData = useSelector(
        (state) => state.studentData.singleCoursePageData
    );

    const tempCourseDetail =
        singleCoursePageData && singleCoursePageData.CourseDetail;
    const tempStages = singleCoursePageData && singleCoursePageData.Stages;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleCoursePageData());
    }, [dispatch]);

    const onRegisterClick = () => {
        const params = new URLSearchParams(window.location.search);
        const courseid = params.get("courseid");

        axios
            .post(
                `http://localhost:4000/api/assignedcourses/${studentBio.StdID}/${courseid}`
            )
            .then((response) => {
                console.log(response.data);
            });
    };

    return (
        <div className="p-5">
            {tempCourseDetail && tempStages ? (
                <div className="row  flex-row-reverse">
                    <div className="col-sm-4">
                        <Card
                            style={{ width: "100%" }}
                            cover={
                                <Avatar
                                    shape="square"
                                    size="large"
                                    src={
                                        "http://localhost:4000/" +
                                        tempCourseDetail.CAvatar
                                    }
                                    style={{ height: "100%" }}
                                />
                            }
                        >
                            <p>Course Name : {tempCourseDetail.CourseName}</p>
                            <p>Course Code : {tempCourseDetail.Code}</p>
                            <p>Instructor : {tempCourseDetail.Instructor}</p>
                            <div className="text-center">
                                <button
                                    className="btn btn-success"
                                    onClick={onRegisterClick}
                                >
                                    Enroll Now!
                                </button>
                            </div>
                        </Card>
                    </div>
                    <div className="col-sm-8 mt-sm-0 mt-4">
                        <h3>Course Description:</h3>
                        {/* <p>{singleCoursePageData.CourseDetail.CourseDescription}</p> */}
                        <p>{tempCourseDetail.CourseDescription}</p>
                        <br />
                        <h3>Course Stages:</h3>
                        <Collapse accordion>
                            {tempStages.map((stage, index) => (
                                <Panel header={stage.StTitle} key={index}>
                                    <p>{stage.StDescription}</p>
                                </Panel>
                            ))}
                        </Collapse>
                    </div>
                </div>
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
        </div>
    );
};

export default SingleCourse;
