import React from "react";
import { Select, Empty } from "antd";
import axios from "axios";

const { Option } = Select;

const Leaderboard = (props) => {
    const [data, setData] = React.useState([]);
    const [courses, setCourses] = React.useState([]);

    const loadCourses = React.useCallback(async () => {
        axios
            .get(
                "http://localhost:4000/api/courses/" +
                    props.instructor.InstructorID
            )
            .then((res) => {
                setCourses(res.data);
            });
    }, [props.instructor]);

    const onCourseChange = (courseid) => {
        axios
            .get("http://localhost:4000/api/scores/leaderboard/" + courseid)
            .then((res) => {
                setData(res.data);
            });
    };

    React.useEffect(() => {
        loadCourses();
    }, [loadCourses]);

    return (
        <React.Fragment>
            <h5 className="d-flex justify-content-center">Leaderboard</h5>
            <Select
                className="w-25"
                placeholder="Select Course"
                onChange={(option) => onCourseChange(option)}
            >
                {courses.map((course) => (
                    <Option key={course.CourseID} value={course.CourseID}>
                        {course.CourseName}
                    </Option>
                ))}
            </Select>
            <br />
            <br />
            {data.length === 0 ? (
                <Empty />
            ) : (
                <table className="table table-hover">
                    <thead>
                        <tr className="table-secondary">
                            <th scope="col">Nick Name</th>
                            <th scope="col">Total Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data, index) => (
                            <tr key={index}>
                                <td>{data.NickName}</td>
                                <td>{data.TotalScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </React.Fragment>
    );
};

export default Leaderboard;
