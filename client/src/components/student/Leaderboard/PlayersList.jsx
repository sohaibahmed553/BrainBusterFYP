import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Typography } from "antd";
import FlipMove from "react-flip-move";
import "./PlayersList.css";

const { Text } = Typography;

const PlayersList = () => {
    const leaderboardPageData = useSelector(
        (state) => state.studentData.leaderboardPageData
    );

    return (
        <div>
            {/* <button onClick={this.props._handle}>Sort</button> */}
            <ul style={{ padding: "0px 30px 20px 30px" }}>
                <FlipMove
                    duration={750}
                    easing="ease-out"
                    enterAnimation="accordionVertical"
                    leaveAnimation="accordionVertical"
                >
                    {leaderboardPageData.map((data) => (
                        <li key={data.StdID} className="listContainer">
                            <div className="rankDiv">{data.StdID}</div>

                            <div className="nameDiv">
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
                                    {data.TotalScore}
                                </Text>
                                <Text className="playerName">
                                    {data.NickName}
                                </Text>

                                {/* <Progress percent={Math.ceil(data.TotalScore * 0.5)} status="active" /> */}
                            </div>
                            {/* <div className="scoreDiv">{data.score}</div> */}
                        </li>
                    ))}
                </FlipMove>
            </ul>
        </div>
    );
};

export default PlayersList;
