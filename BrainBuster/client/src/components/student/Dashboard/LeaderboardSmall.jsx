import React from "react";
import { Avatar, Typography, Badge, Empty } from "antd";
import "./LeaderboardSmall.css";
import "./RegCourses.css";

const { Text } = Typography;

const LeaderboardSmall = ({ dashboardPageData }) => {
    const leaderboard = dashboardPageData ? dashboardPageData.leaderboard : [];

    const objectEmpty = () => {
        for (let i = 0; i < leaderboard.length; i++) {
            if (leaderboard[i] !== null) return false;
        }
        return true;
    };

    if (objectEmpty())
        return (
            <div>
                <div className="courseTitle">
                    <Text>Leaderboard</Text>
                    <br />
                    <Text disabled style={{ fontSize: "12px" }}>
                        PLAYERS LEADERBOARD
                    </Text>
                </div>
                <div className="course">
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </div>
            </div>
        );

    return (
        <div className="body">
            {dashboardPageData ? (
                <>
                    {console.log(leaderboard)}
                    <div className="upperDiv">
                        {/* {console.log(dashboardPageData.leaderboard)} */}
                        {dashboardPageData.topScorers[1] && (
                            <div className="col_1">
                                <div>
                                    <Badge
                                        count={2}
                                        style={{ backgroundColor: "#52c41a" }}
                                    >
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    </Badge>
                                    <br />
                                    <Text style={{ color: "white" }}>
                                        {
                                            dashboardPageData.topScorers[1]
                                                .NickName
                                        }
                                    </Text>
                                </div>
                            </div>
                        )}
                        {dashboardPageData.topScorers[0] && (
                            <div className="col_1">
                                <div>
                                    <Badge
                                        count={1}
                                        style={{ backgroundColor: "#52c41a" }}
                                    >
                                        <Avatar
                                            size={70}
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        />
                                    </Badge>
                                    <br />
                                    <Text style={{ color: "white" }}>
                                        {
                                            dashboardPageData.topScorers[0]
                                                .NickName
                                        }
                                    </Text>
                                </div>
                            </div>
                        )}
                        {dashboardPageData.topScorers[2] && (
                            <div className="col_1">
                                <div>
                                    <Badge
                                        count={3}
                                        style={{ backgroundColor: "#52c41a" }}
                                    >
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    </Badge>
                                    <br />
                                    <Text style={{ color: "white" }}>
                                        {
                                            dashboardPageData.topScorers[2]
                                                .NickName
                                        }
                                    </Text>
                                </div>
                            </div>
                        )}
                    </div>

                    {dashboardPageData &&
                        Object.keys(dashboardPageData.leaderboard).forEach(
                            (key) =>
                                dashboardPageData.leaderboard[key] == null &&
                                delete dashboardPageData.leaderboard[key]
                        )}
                    <div className="bottomDiv">
                        <ul style={{ padding: "0px 15px 5px 15px" }}>
                            {dashboardPageData &&
                                dashboardPageData.leaderboard.map(
                                    (player, index) => (
                                        <li
                                            key={index}
                                            className="listContainer2"
                                        >
                                            <div className="rankDiv2">
                                                {player.StdID}
                                            </div>

                                            <div
                                                className="nameDiv2"
                                                style={{ width: "92%" }}
                                            >
                                                <Avatar
                                                    size={"large"}
                                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                                />
                                                <Text
                                                    style={{
                                                        fontSize: "25px",
                                                        float: "right",
                                                        paddingTop: "10px",
                                                    }}
                                                >
                                                    {player.TotalScore}
                                                </Text>
                                                <Text className="playerName2">
                                                    {player.NickName}
                                                </Text>

                                                {/* <Progress percent={player.TotalScore * 0.5} status="active" /> */}
                                            </div>
                                            {/* <div className="scoreDiv">{data.score}</div> */}
                                        </li>
                                    )
                                )}
                        </ul>
                    </div>
                </>
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
        </div>
    );
};

export default LeaderboardSmall;
