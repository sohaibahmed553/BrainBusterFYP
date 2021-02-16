import React from "react";
import { Result } from "antd";
import { useSelector } from "react-redux";

const FinalResult = () => {
    const stats = useSelector((state) => state.stats);
    const newBadges = useSelector((state) => state.newBadges);

    const params = new URLSearchParams(window.location.search);
    const difficulty = Number(params.get("difficulty"));

    return (
        <div>
            <Result
                status={
                    (difficulty === 1 && stats.score >= 60) ||
                    (difficulty === 2 && stats.score >= 70) ||
                    (difficulty === 3 && stats.score >= 80)
                        ? "success"
                        : "error"
                }
                title={
                    (difficulty === 1 && stats.score >= 60) ||
                    (difficulty === 2 && stats.score >= 70) ||
                    (difficulty === 3 && stats.score >= 80)
                        ? "Successfully Completed Stage!"
                        : "You cannot achieve the passing marks!"
                }
                subTitle={
                    (difficulty === 1 && stats.score >= 60) ||
                    (difficulty === 2 && stats.score >= 70) ||
                    (difficulty === 3 && stats.score >= 80)
                        ? "Your next stage is unlocked now!"
                        : "Your next stage is still locked!"
                }
                extra={[
                    <div key="1">
                        <h4>Total: </h4>
                        <p>{stats.total}</p>
                        <h4>Correct: </h4>
                        <p>{stats.correct}</p>
                        <h4>Wrong: </h4>
                        <p>{stats.wrong}</p>
                        <h1>Score: </h1>
                        <p>{stats.score}</p>
                        <h1>New Badges: </h1>
                        {newBadges.map((badge, index) => (
                            <div key={index}>
                                <p>{badge.BName}</p>
                                <img
                                    src={
                                        "http://localhost:4000/public/badges/" +
                                        badge.BAvatar
                                    }
                                    style={{ width: "100px" }}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>,
                ]}
            />

            {/* <button className="btn btn-primary" onClick={()=>history.push("")}>Go to Home</button> */}
            {/* <button className="btn btn-primary">Go to Stages</button> */}
        </div>
    );
};

export default FinalResult;
