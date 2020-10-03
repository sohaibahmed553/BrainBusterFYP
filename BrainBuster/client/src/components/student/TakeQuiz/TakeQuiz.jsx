import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getQuizPageData } from "../../../actions";
import StepWizard from "react-step-wizard";
import QuizStep from "./QuizStep";
import FinalResult from "./FinalResult";
import "./TakeQuiz.css";
import NextQuestions from "./NextQuestions";
import Timer from "react-compound-timer";
import { resetStats } from "../../../actions";

import { Col, Row, List, Typography, Modal, Button, Empty } from "antd";

const { Text } = Typography;

const TakeQuiz = ({ studentBio }) => {
    const [timeOver, setTimeOver] = useState(false);
    const [index, setIndex] = useState(0);
    const quizPageData = useSelector((state) => state.studentData.quizPageData);

    const dispatch = useDispatch();
    const history = useHistory();

    const countdownRef = React.useRef();

    useEffect(() => {
        dispatch(resetStats());
        dispatch(getQuizPageData());
    }, [dispatch]);

    const singleMCQ = (i) => {
        // setIndex(i);
        const mcq = {
            count: i,
            Question: quizPageData.questions[i].Questions,
            A: quizPageData.questions[i].A,
            B: quizPageData.questions[i].B,
            C: quizPageData.questions[i].C,
            D: quizPageData.questions[i].D,
            Answer: quizPageData.questions[i].Answer,
            Explanation: quizPageData.questions[i].Explanation,
        };
        console.log(index);
        return mcq;
    };

    // if(quizPageData&&quizPageData.questions.length<10) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />

    return (
        <div>
            {quizPageData && quizPageData.questions.length >= 10 ? (
                <Row className="font" style={{ height: "100%" }}>
                    <Col lg={19} md={24}>
                        <StepWizard>
                            <QuizStep
                                singleMCQ={singleMCQ(0)}
                                setIndex={setIndex}
                                countdownRef={countdownRef}
                            />
                            <QuizStep
                                singleMCQ={singleMCQ(1)}
                                setIndex={setIndex}
                                countdownRef={countdownRef}
                            />
                            <QuizStep
                                singleMCQ={singleMCQ(2)}
                                setIndex={setIndex}
                                countdownRef={countdownRef}
                            />
                            <QuizStep
                                singleMCQ={singleMCQ(3)}
                                setIndex={setIndex}
                                countdownRef={countdownRef}
                            />
                            <QuizStep
                                singleMCQ={singleMCQ(4)}
                                setIndex={setIndex}
                                countdownRef={countdownRef}
                            />
                            <QuizStep
                                singleMCQ={singleMCQ(5)}
                                setIndex={setIndex}
                                countdownRef={countdownRef}
                            />
                            <QuizStep
                                singleMCQ={singleMCQ(6)}
                                setIndex={setIndex}
                                countdownRef={countdownRef}
                            />
                            <QuizStep
                                singleMCQ={singleMCQ(7)}
                                setIndex={setIndex}
                                countdownRef={countdownRef}
                            />
                            <QuizStep
                                singleMCQ={singleMCQ(8)}
                                setIndex={setIndex}
                                countdownRef={countdownRef}
                            />
                            <QuizStep
                                singleMCQ={singleMCQ(9)}
                                setIndex={setIndex}
                                countdownRef={countdownRef}
                                studentBio={studentBio}
                            />
                            <FinalResult
                                studentBio={studentBio}
                                setIndex={setIndex}
                            />
                        </StepWizard>
                    </Col>
                    {index !== 11 && (
                        <Col span={5} className="hide-next-questions">
                            <br />
                            <br />

                            <Text
                                className="font"
                                style={{ marginLeft: "20px" }}
                            >
                                TIME LEFT
                            </Text>
                            <div style={{ marginLeft: "20px", color: "red" }}>
                                <Timer
                                    ref={countdownRef}
                                    initialTime={600000}
                                    startImmediately={true}
                                    direction="backward"
                                    checkpoints={[
                                        {
                                            time: 0,
                                            callback: () => setTimeOver(true),
                                        },
                                    ]}
                                >
                                    <Timer.Hours />:
                                    <Timer.Minutes />:
                                    <Timer.Seconds />
                                </Timer>
                            </div>
                            <br />
                            <Text
                                className="font"
                                style={{ marginLeft: "20px" }}
                            >
                                Pending
                            </Text>
                            <br />
                            <List>
                                <NextQuestions
                                    question={
                                        index + 1 < 10 &&
                                        quizPageData.questions[index + 1]
                                            .Questions
                                    }
                                    i={index + 1}
                                    color={"color1 color2"}
                                    textColor={"white"}
                                />
                                <NextQuestions
                                    question={
                                        index + 2 < 10 &&
                                        quizPageData.questions[index + 2]
                                            .Questions
                                    }
                                    i={index + 2}
                                    color={"color1"}
                                />
                                <NextQuestions
                                    question={
                                        index + 3 < 10 &&
                                        quizPageData.questions[index + 3]
                                            .Questions
                                    }
                                    i={index + 3}
                                    color={"color1"}
                                />
                                <NextQuestions
                                    question={
                                        index + 4 < 10 &&
                                        quizPageData.questions[index + 4]
                                            .Questions
                                    }
                                    i={index + 4}
                                    color={"color1"}
                                />
                            </List>
                        </Col>
                    )}

                    <Modal
                        title={"Sorry! your time is Over"}
                        visible={timeOver}
                        closable={false}
                        maskClosable={false}
                        footer={
                            <Button
                                type="primary"
                                onClick={() => history.push("/student")}
                            >
                                Return to Home
                            </Button>
                        }
                    >
                        <p>You can attemp it again!</p>
                    </Modal>
                </Row>
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
        </div>
    );
};

export default TakeQuiz;
