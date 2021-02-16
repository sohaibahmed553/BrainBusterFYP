import React from "react";

const Logout = (props) => {
	React.useEffect(() => {
		localStorage.removeItem("token");
		window.location.reload(true);
	});
	return <React.Fragment />;
};

export default Logout;
