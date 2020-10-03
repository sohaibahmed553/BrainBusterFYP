import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./FullPageLoader.css";
import LoaderGif from "../../../Assets/loader.gif";

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const FullPageLoader = () => {
	const loader = useSelector((state) => state.loader);

	const override = css`
		display: block;
		margin: 0 auto;
		border-color: red;
	`;

	if (!loader) return null;
	return (
		// <div class="loader-container">
		// 	<div className="loader">
		// 		<img src={LoaderGif} />
		// 	</div>
		// </div>
		<div class="loader-container">
			<div className="loader">
				<div className="sweet-loading">
					<ClipLoader css={override} size={150} color={"#123abc"} loading={loader} />
				</div>
			</div>
		</div>
	);
};

export default FullPageLoader;
