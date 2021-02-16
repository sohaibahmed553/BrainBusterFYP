import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Empty, Modal } from "antd";
import { getStagesPageData } from "../../../actions";
import "./Stages.css";
import SingleStage from "./SingleStage";

const Stages = ({ studentBio }) => {
    const stagesPageData = useSelector(
        (state) => state.studentData.stagesPageData
    );
    const [showTutorial, setShowTutorial] = useState(false);
    const [tutorialLink, setTutorialLink] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStagesPageData(studentBio.StdID));
    }, [studentBio.StdID, dispatch]);

    const colorSelector = (count) => {
        if (count % 7 === 0) {
            return "Color0";
        } else if (count % 7 === 1) {
            return "Color1";
        } else if (count % 7 === 2) {
            return "Color2";
        } else if (count % 7 === 3) {
            return "Color3";
        } else if (count % 7 === 4) {
            return "Color4";
        } else if (count % 7 === 5) {
            return "Color5";
        } else if (count % 7 === 6) {
            return "Color6";
        } else if (count % 7 === 7) {
            return "Color7";
        }
    };

    // if (stagesPageData.length === 0) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    // <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
    return (
        <div className="p-md-4 pt-5">
            {stagesPageData && stagesPageData.length !== 0 ? (
                <>
                    <div className="row listContainer m-0">
                        {stagesPageData.map((stage, key) => (
                            <div
                                key={stage.StID}
                                className="col-xl-4 col-md-6 lkeystItem"
                            >
                                <SingleStage
                                    count={key + 1}
                                    StID={stage.StID}
                                    StTitle={stage.StTitle}
                                    EasyScore={stage.EasyScore}
                                    MediumScore={stage.MediumScore}
                                    HardScore={stage.HardScore}
                                    color={colorSelector(key + 1)}
                                    setShowTutorial={(val) =>
                                        setShowTutorial(val)
                                    }
                                    tutorialLink={stage.Tutorial}
                                    setTutorialLink={(val) =>
                                        setTutorialLink(val)
                                    }
                                />
                            </div>
                        ))}
                    </div>

                    {showTutorial && (
                        <Modal
                            title="."
                            visible={showTutorial}
                            onCancel={() => setShowTutorial(false)}
                            footer={false}
                            maskClosable={false}
                            width="70vw"
                        >
                            <iframe
                                title="1"
                                className="video-size"
                                src={
                                    "https://www.youtube.com/embed/" +
                                    tutorialLink.split("?v=")[1]
                                }
                            ></iframe>
                        </Modal>
                    )}
                </>
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
        </div>
    );
};

export default Stages;
