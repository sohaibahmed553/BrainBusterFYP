import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Select, Avatar } from "antd";
import { getRegCourses } from "../../../actions";

const { Option } = Select;

const Topbar = ({ studentBio }) => {
    const regCourses = useSelector((state) => state.regCourses);

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        dispatch(getRegCourses(studentBio.StdID));
    }, [dispatch, studentBio]);

    const onSelectChange = (value) => {
        if (window.location.pathname === "/student") {
            history.push(`/student?courseid=${value}`);
        } else if (window.location.pathname === "/student/stages") {
            history.push(`/student/stages?courseid=${value}`);
        } else if (window.location.pathname === "/student/leaderboard") {
            history.push(`/student/leaderboard?courseid=${value}`);
        }
    };

    return (
        <nav
            className="navbar navbar-dark bg-primary"
            style={{ height: "9vh" }}
        >
            <Link to="/student" className="navbar-brand">
                BrainBuster
            </Link>
            <div>
                <Select
                    defaultValue="Select Course"
                    style={{ width: 200 }}
                    onChange={onSelectChange}
                >
                    {regCourses.length &&
                        regCourses.map((course, index) => (
                            <Option key={index} value={course.CourseID}>
                                {course.CourseName}
                            </Option>
                        ))}
                </Select>
                <Link to="/student/profile">
                    <span className="ml-2">
                        <Avatar
                            style={{
                                backgroundColor: "#001529",
                                verticalAlign: "middle",
                            }}
                            size="large"
                        >
                            {studentBio.NickName.split(" ")[0]}
                        </Avatar>

                        {/* <p style={{ display: "inline", color: "white" }}>{}</p> */}
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Topbar;
