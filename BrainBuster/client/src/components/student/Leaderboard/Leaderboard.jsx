import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Leaderboard.css";
import { getLeaderboardPageData } from "../../../actions";
import PlayersList from "./PlayersList";
import { Row, Col, Avatar, Typography, Empty } from "antd";

const { Text } = Typography;

const Leaderboard = () => {
    const leaderboardPageData = useSelector(
        (state) => state.studentData.leaderboardPageData
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLeaderboardPageData());
    }, [dispatch]);

    // if (leaderboardPageData && leaderboardPageData.length === 0) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

    return (
        <div>
            {leaderboardPageData && leaderboardPageData.length !== 0 ? (
                <div className="body">
                    <Row>
                        <Col xs={24} sm={24} md={10} className="sider">
                            <Avatar size={64} className="avatar">
                                User
                            </Avatar>
                            <br />
                            <Text className="name" style={{ color: "white" }}>
                                {leaderboardPageData[0].NickName}
                            </Text>
                            <br />
                            <br />
                            <br />
                            <Row className="statsRow">
                                <Col span={12} className="statsDiv2">
                                    <Text className="statsHeading">Rank</Text>
                                    <br />
                                    <Text className="statsVal">1st</Text>
                                </Col>
                                <Col span={12}>
                                    <Text className="statsHeading">Score</Text>
                                    <br />
                                    <Text className="statsVal">
                                        {leaderboardPageData[0].TotalScore}
                                    </Text>
                                </Col>
                            </Row>

                            {/* <div className="progressBarDiv">
								<ProgressBar
									radius={80}
									progress={progress}
									strokeWidth={8}
									strokeColor={themeColor}
									trackStrokeWidth={8}
									pointerRadius={8}
									pointerStrokeWidth={5}
									pointerStrokeColor={themeColor}
								>
									<div className="indicator">
										<div>{leaderboardPageData[0].score * 0.5}%</div>
									</div>
								</ProgressBar>
							</div> */}
                        </Col>

                        <Col xs={24} sm={24} md={14} className="content">
                            <div className="innerdiv">
                                {
                                    <PlayersList
                                        leaderboardPageData={
                                            leaderboardPageData
                                        }
                                    />
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
        </div>
    );
};

export default Leaderboard;
