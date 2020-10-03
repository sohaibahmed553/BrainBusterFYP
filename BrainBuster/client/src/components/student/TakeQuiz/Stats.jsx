import React from "react";
import { useSelector } from "react-redux";
import { Card, Typography } from "antd";

const { Text } = Typography;

const Stats = () => {
    const stats = useSelector((state) => state.stats);
    return (
        <div className="row" style={{ padding: "0px 12px 0px 12px" }}>
            <div className="col-md-3 " style={{ padding: "1px" }}>
                <Card bordered={false} style={{ textAlign: "center" }}>
                    <b style={{ fontSize: "20px" }}>{stats.total}</b>
                    <br />
                    <Text disabled>TOTAL</Text>
                </Card>
            </div>
            <div className="col-md-3 " style={{ padding: "1px" }}>
                <Card bordered={false} style={{ textAlign: "center" }}>
                    <b
                        style={{
                            fontSize: "20px",
                            color: "#67BB6B",
                        }}
                    >
                        {stats.correct}
                    </b>
                    <br />
                    <Text disabled>CORRECT</Text>
                </Card>
            </div>
            <div className="col-md-3" style={{ padding: "1px" }}>
                <Card bordered={false} style={{ textAlign: "center" }}>
                    <b
                        style={{
                            fontSize: "20px",
                            color: "#F66C62",
                        }}
                    >
                        {stats.wrong}
                    </b>
                    <br />
                    <Text disabled>WRONG</Text>
                </Card>
            </div>
            <div className="col-md-3" style={{ padding: "1px" }}>
                <Card bordered={false} style={{ textAlign: "center" }}>
                    <b
                        style={{
                            fontSize: "20px",
                            color: "#2196F3",
                        }}
                    >
                        {stats.score}/100
                    </b>
                    <br />
                    <Text disabled>Score</Text>
                </Card>
            </div>
        </div>
    );
};

export default Stats;
