import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SingleStage.css";
import PopOver from "./PopOver";

const SingleStage = (props) => {
	const [popoverShow, setPopoverShow] = useState(false);
	const history = useHistory();

	const handleClick = (difficulty) => {
		const params = new URLSearchParams(window.location.search);
		const courseid = params.get("courseid");
		history.push(`/student/takequiz?courseid=${courseid}&&stid=${props.StID}&&difficulty=${difficulty}`);
	};
	return (
		<div className={"stagebox stagebox" + props.color}>
			<div className="header" onClick={() => setPopoverShow(!popoverShow)} style={{ cursor: "pointer" }}>
				<div
					className={"badge badge" + props.color}
					style={{ borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }}
				>
					<h3 style={{ color: "white" }}>{props.count}</h3>
				</div>
				<h5 className={"title" + props.color} style={{ height: "45px", overflow: "hidden" }}>
					{props.StTitle}
				</h5>
			</div>

			{popoverShow && (
				<PopOver
					StID={props.StID}
					popoverShow={popoverShow}
					popoverShowToggler={(val) => setPopoverShow(val)}
					setShowTutorial={props.setShowTutorial}
					tutorialLink={props.tutorialLink}
					setTutorialLink={props.setTutorialLink}
				/>
			)}

			<hr className="ml-3 mr-3" />

			{/* <div style={{ padding: "10px 30px 0px 30px", textAlign: "justify", height: "54px", overflow: "hidden" }}>
				<p style={{ lineHeight: "1" }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque adipisci nisi architecto quod
					corporis beatae nemo expedita.
				</p>
			</div> */}

			<div style={{ padding: "10px 20px 10px 20px", textAlign: "justify" }}>
				<div className="row pb-1">
					<div className="col-6" style={{ textAlign: "left" }}>
						<h6>Easy</h6>
					</div>
					<div className="col-6" style={{ textAlign: "right" }}>
						<h6 style={{ display: "inline" }}>{props.EasyScore ? props.EasyScore : 0}</h6> &nbsp;&nbsp;
						<button className="btn btn-sm btn-outline-primary" onClick={() => handleClick(1)}>
							Start
						</button>
					</div>
				</div>
				<div className="row pb-1">
					<div className="col-6" style={{ textAlign: "left" }}>
						<h6>Medium</h6>
					</div>
					<div className="col-6" style={{ textAlign: "right" }}>
						<h6 style={{ display: "inline" }}>{props.MediumScore ? props.MediumScore : 0}</h6> &nbsp;&nbsp;
						<button className="btn btn-sm btn-outline-primary" onClick={() => handleClick(2)}>
							Start
						</button>
					</div>
				</div>
				<div className="row pb-1">
					<div className="col-6" style={{ textAlign: "left" }}>
						<h6>Hard</h6>
					</div>
					<div className="col-6" style={{ textAlign: "right" }}>
						<h6 style={{ display: "inline" }}>{props.HardScore ? props.HardScore : 0}</h6> &nbsp;&nbsp;
						<button className="btn btn-sm btn-outline-primary" onClick={() => handleClick(3)}>
							Start
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleStage;
