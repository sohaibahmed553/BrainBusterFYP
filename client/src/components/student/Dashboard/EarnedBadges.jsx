import React from "react";
import { Typography, Empty } from "antd";
import "./EarnedBadges.css";
import "./RegCourses.css";

const { Text } = Typography;

const EarnedBadges = ({ dashboardPageData }) => {
	let badges = dashboardPageData ? dashboardPageData.badges : [];

	return (
		<div>
			<div className="courseTitle ">
				<Text>Badges</Text>
				<br />
				<Text disabled style={{ fontSize: "12px" }}>
					YOUR RECENT BADGES
				</Text>
			</div>
			<div className="course">
				{badges.length !== 0 ? (
					badges.map((badge, index) => (
						<div key={index} className="row">
							<div className="col-6 text-left">
								<h6>{badge.BName}</h6>
							</div>
							<div className="col-6 text-right">
								<img src={"http://localhost:4000/public/badges/" + badge.BAvatar} width="40px" alt="" />
							</div>
							<br />
							<br />
						</div>
					))
				) : (
					<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
				)}
			</div>
			{/* <div className="noData">
				<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{ margin: "0px" }} />
			</div> */}
		</div>
	);
};

export default EarnedBadges;
