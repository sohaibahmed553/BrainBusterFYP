import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Modal } from "antd";
import {
    getDashboardPageData,
    getRegCourses,
    showLoader,
} from "../../../actions";
import "./Dashboard.css";
import Leaderboard from "../Leaderboard/Leaderboard";
import LeaderboardSmall from "./LeaderboardSmall";
import RegCourses from "./RegCourses";
import EarnedBadges from "./EarnedBadges";

const { Content } = Layout;

const Dashboard = ({ studentBio }) => {
    const [visible, setVisible] = useState(false);
    const dashboardPageData = useSelector(
        (state) => state.studentData.dashboardPageData
    );
    const regCourses = useSelector((state) => state.regCourses);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDashboardPageData(studentBio.StdID));
        dispatch(getRegCourses(studentBio.StdID));

        dispatch(showLoader());

        // setTimeout(() => {
        // 	dispatch(hideLoader());
        // }, 2000);
    }, [dispatch, studentBio]);

    return (
        <Content>
            <div className="contentDiv p-md-5 p-4">
                <div className="column_1">
                    {/* <div className="activeHoursDiv">
						<ActiveHours />
					</div> */}
                    <div className="coursesDiv">
                        <RegCourses
                            regCourses={regCourses}
                            studentBio={studentBio}
                        />
                    </div>
                    <div className="rewardsDiv">
                        <EarnedBadges dashboardPageData={dashboardPageData} />
                    </div>
                </div>

                <div className="column_2">
                    <div
                        className="leaderboardDiv"
                        onClick={() => setVisible(true)}
                    >
                        <div style={{ cursor: "pointer" }}>
                            <LeaderboardSmall
                                studentBio={studentBio}
                                dashboardPageData={dashboardPageData}
                            />
                        </div>

                        <Modal
                            visible={visible}
                            closable={false}
                            footer={null}
                            centered={true}
                            onCancel={() => setVisible(false)}
                            width={"900px"}
                            bodyStyle={{ height: "543px", padding: "0" }}
                        >
                            <Leaderboard />
                        </Modal>
                    </div>
                </div>
            </div>
        </Content>
    );
};

export default Dashboard;
