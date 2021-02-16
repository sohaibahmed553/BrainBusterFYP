import React from "react";
import { Row, Col, Typography, Avatar } from "antd";

const { Text } = Typography;

const NextQuestions = ({ question, i, color, textColor }) => {
	return (
		<div>
			{i <= 9 && (
				<div className={color}>
					<Row>
						<Col span={4}>
							<Avatar
								size={40}
								style={{
									backgroundColor: "white",
									color: "#59598E",
									border: "2px solid #ECECEC",
								}}
							>
								<Text>#{i + 1}</Text>
							</Avatar>
						</Col>
						<Col span={20}>
							{/* {this.props.questions.length !== 0 && ( */}
							<div
								style={{
									wordWrap: "break-word",
									height: "45px",
									overflow: "hidden",
									padding: "0px 10px 0px 10px",
								}}
							>
								<Text style={{ color: textColor }}>{question}</Text>
							</div>
							{/* )} */}
						</Col>
					</Row>
				</div>
			)}
		</div>
	);
};

export default NextQuestions;
