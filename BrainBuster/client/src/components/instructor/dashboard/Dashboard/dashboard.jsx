import React from "react";
import axios from "axios";

import { Select } from "antd";
const { Option } = Select;

const Dashboard = (props) => {
	const [courses, setCourses] = React.useState([]);
	const [dashboard, setDashboard] = React.useState({});

	const loadCourses = React.useCallback(async () => {
		axios.get("http://localhost:4000/api/courses/" + props.instructor.InstructorID).then((res) => {
			setCourses(res.data);
		});
	}, [props.instructor]);

	const loadDashboard = async (courseid) => {
		await axios.get("http://localhost:4000/api/instructors/dashboard/" + courseid).then((res) => {
			setDashboard(res.data);
			console.log(res.data);
		});
	};

	const onCourseChange = (courseid) => {
		loadDashboard(courseid);
	};

	React.useEffect(() => {
		loadCourses();
	}, [loadCourses]);

	return (
		<React.Fragment>
			<Select className="w-25" placeholder="Select Course" onChange={(option) => onCourseChange(option)}>
				{courses.map((course) => (
					<Option key={course.CourseID} value={course.CourseID}>
						{course.CourseName}
					</Option>
				))}
			</Select>
			<br />
			<br />

			<div className="pl-5 pr-5">
				{dashboard && (
					<>
						<div className="row">
							<div className="col-md-4 p-1">
								<div className="statsDiv">
									<h6>Total Stages</h6>
									{dashboard.stageCount}
								</div>
							</div>
							<div className="col-md-4 p-1">
								<div className="statsDiv">
									<h6>Total Questions</h6>
									{dashboard.questionCount}
								</div>
							</div>
							<div className="col-md-4 p-1">
								<div className="statsDiv">
									<h6>Total Students</h6>
									{dashboard.studentCount}
								</div>
							</div>
						</div>

						<br />

						<div className="p-4 pl-0 pr-0" style={{ backgroundColor: "#F0F2F5" }}>
							<h6 className="text-center">Students Leaderboard</h6>
							<br />
							{dashboard.leaderboard &&
								dashboard.leaderboard.map((course, index) => (
									<div className="row" key={index}>
										<div className="col-4 text-left">{course.NickName}</div>
										<div className="col-4 text-right">{course.TotalScore}</div>
									</div>
								))}
						</div>
					</>
				)}
			</div>
		</React.Fragment>
	);
};

export default Dashboard;
