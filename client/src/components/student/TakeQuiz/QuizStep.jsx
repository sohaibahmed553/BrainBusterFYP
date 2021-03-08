import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Card, Radio, Alert, Collapse, message } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import "./TakeQuiz.css";
import Stats from "./Stats";
import {
  setCorrect,
  setWrong,
  setScore,
  answersRecord,
  saveNewBadges,
} from "../../../actions";

const { Panel } = Collapse;

const QuizStep = ({
  singleMCQ,
  nextStep,
  setIndex,
  countdownRef,
  studentBio,
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const stats = useSelector((state) => state.stats);
  const dispatch = useDispatch();

  const onRadioChange = (e) => {
    // if (selectedValue !== "") return;
    setSelectedValue(e.target.value);
  };

  const onSubmitClick = (e) => {
    if (submitted) return;
    if (selectedValue !== "") {
      countdownRef.current.pause();
      setIndex(singleMCQ.count + 1);
      selectedValue === singleMCQ.Answer
        ? dispatch(setCorrect(1)) &&
          dispatch(setScore(10)) &&
          dispatch(answersRecord(true))
        : dispatch(setWrong(1)) && dispatch(answersRecord(false));

      e.target.disabled = true;
      setSubmitted(true);
    }
  };

  const onNextClick = () => {
    countdownRef.current.start();
    nextStep();
    if (singleMCQ.count === 9) {
      const params = new URLSearchParams(window.location.search);
      const stid = params.get("stid");
      const difficulty = Number(params.get("difficulty"));
      const courseid = Number(params.get("courseid"));
      const learnerType = getLearnerType(difficulty);
      console.log(learnerType);

      if (
        (difficulty === 1 && stats.score >= 60) ||
        (difficulty === 2 && stats.score >= 70) ||
        (difficulty === 3 && stats.score >= 80)
      ) {
        console.log("i'm in the body.");
        axios
          .post(
            `/api/badges/newbadges/${studentBio.StdID}/${courseid}/${stid}/${difficulty}/${stats.score}/${learnerType}`
          )
          .then((response) => {
            console.log("new badges = ", response.data);
            dispatch(saveNewBadges(response.data));
          });

        switch (difficulty) {
          case 1:
            axios
              .put(`/api/scores/${studentBio.StdID}/${stid}`, null, {
                params: { EasyScore: stats.score },
              })
              .then((response) => {
                console.log(response.data);
              });
            break;

          case 2:
            axios
              .put(`/api/scores/${studentBio.StdID}/${stid}`, null, {
                params: { mediumScore: stats.score },
              })
              .then((response) => {
                console.log(response.data);
              });
            break;

          case 3:
            axios
              .put(`/api/scores/${studentBio.StdID}/${stid}`, null, {
                params: { hardScore: stats.score },
              })
              .then((response) => {
                console.log(response.data);
              });
            break;

          default:
        }
      }
    }
  };

  const getLearnerType = (difficulty) => {
    let upto;
    if (difficulty === 1) {
      upto = 4;
    } else if (difficulty === 2) {
      upto = 3;
    } else if (difficulty === 3) {
      upto = 2;
    } else {
      upto = 0;
    }

    for (var i = 0; i < upto; i++) {
      if (stats.answersRecord[i] === true) {
        return "None";
      }
    }
    if (difficulty === 1) {
      return "Quick";
    } else if (difficulty === 2) {
      return "Rapid";
    } else if (difficulty === 3) {
      return "Clever";
    } else {
      return "None";
    }
  };

  return (
    <div
      style={{
        background: "#ECECEC",
        // padding: "30px 70px 0px 70px",
        // minHeight: "100vh",
      }}
      className="p-md-5 pb-md-0 p-3"
    >
      <Stats />
      <br />
      <Card
        title={
          <h5>{"#" + (singleMCQ.count + 1) + " " + singleMCQ.Question}</h5>
        }
        bordered={false}
      >
        {
          <Radio.Group
            onChange={(e) => onRadioChange(e)}
            value={selectedValue}
            id="radio"
          >
            <Radio id="radio1" value={"A"}>
              {singleMCQ.A}
            </Radio>
            <br />
            <br />
            <br />
            <Radio id="radio2" value={"B"}>
              {singleMCQ.B}
            </Radio>
            <br />
            <br />
            <br />
            <Radio id="radio3" value={"C"}>
              {singleMCQ.C}
            </Radio>
            <br />
            <br />
            <br />
            <Radio id="radio4" value={"D"}>
              {singleMCQ.D}
            </Radio>
            <br />
            <br />
            <br />
          </Radio.Group>
        }
        <br />
        <br />
        <button
          className="btn btn-success"
          id="submitbtn"
          style={{ backgroundColor: "#66BB6A", color: "white" }}
          onClick={(e) => {
            onSubmitClick(e);
          }}
        >
          Submit
        </button>
        <button
          className="btn btn-success"
          id="nextBtn"
          style={{ backgroundColor: "#66BB6A", color: "white" }}
          onClick={() =>
            submitted
              ? onNextClick()
              : message.error("Submit your answer first!")
          }
        >
          Next
          <CaretRightOutlined />
        </button>
        <br />
        <br />

        {submitted &&
          (selectedValue === singleMCQ.Answer ? (
            <div>
              <Alert type="success" message="Correct Answer" />
            </div>
          ) : (
            <div>
              <Alert type="error" message="Incorrect Answer" />
            </div>
          ))}
        <br />
        {submitted && (
          <div>
            <Collapse accordion>
              <Panel header={"See Answer"}>
                <b>Correct answer is:</b> <br />
                <p>{singleMCQ.Answer}</p>
                <b>Explanation:</b>
                <br />
                <p>{singleMCQ.Explanation}</p>
              </Panel>
            </Collapse>
          </div>
        )}
      </Card>
    </div>
  );
};

export default QuizStep;
