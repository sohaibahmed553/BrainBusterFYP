import React from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = (props) => {
	const [dashboard, setDashboard] = React.useState();

	const loadDashboard = async () => {
		await axios.get("http://localhost:4000/api/admins/dashboard/data").then((res) => {
			setDashboard(res.data);
			console.log(res.data);
		});
	};

	React.useEffect(() => {
		loadDashboard();
	}, []);

	return (
		<div className="pl-5 pr-5">
			{dashboard && (
				<>
					<div className="row">
						<div className="col-md-4 p-1">
							<div className="statsDiv">
								<h6>Total Admins</h6>
								{dashboard.adminCount}
							</div>
						</div>
						<div className="col-md-4 p-1">
							<div className="statsDiv">
								<h6>Total Instructors</h6>
								{dashboard.instructorCount}
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

					<div className="row">
						<div className="col-md-6 p-2">
							<div className="p-4" style={{ backgroundColor: "#F0F2F5" }}>
								<h6 className="text-center">Admins</h6>
								{dashboard.admins.map((admin, index) => (
									<div className="row" key={index}>
										<div className="col-6 text-left">{admin.NickName}</div>
										<div className="col-6 text-right">{admin.Email}</div>
									</div>
								))}
							</div>
						</div>
						<div className="col-md-6 p-2">
							<div className="p-4 pr-4" style={{ backgroundColor: "#F0F2F5" }}>
								<h6 className="text-center">Instructors</h6>
								{dashboard.instructors.map((instructor, index) => (
									<div className="row mr-4" key={index}>
										<div className="col-6 text-left">{instructor.NickName}</div>
										<div className="col-6 text-right">{instructor.Email}</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<br />

					<div className="p-4 pl-0 pr-0" style={{ backgroundColor: "#F0F2F5" }}>
						<h6 className="text-center">Courses</h6>
						<br />
						{dashboard.courses &&
							dashboard.courses.map((course, index) => (
								<div className="row" key={index}>
									<div className="col-4 text-left">{course.CourseName}</div>
									<div className="col-4 text-center">{course.Code}</div>
									<div className="col-4 text-right">{course.UserName}</div>
								</div>
							))}
					</div>
				</>
			)}
		</div>
	);
};

export default Dashboard;
