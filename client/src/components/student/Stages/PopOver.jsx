import React from "react";
import { Button } from "antd";
import "./PopOver.css";
import OutsideClickHandler from "react-outside-click-handler";

const PopOver = (props) => {
    const onClickHandler = () => {
        props.setShowTutorial(true);
        props.setTutorialLink(props.tutorialLink);
    };

    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                props.popoverShowToggler(!props.popoverShow);
            }}
        >
            {console.log("this. one = ", props.tutorialLink)}
            <div className="parentContainer">
                <Button
                    onClick={onClickHandler}
                    shape="round"
                    size="large"
                    block
                >
                    Tutorials
                </Button>
            </div>
        </OutsideClickHandler>
    );
};

export default PopOver;
