import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoursesPageData } from "../../../actions";

const AllCourses = () => {
	const coursesPageData = useSelector((state) => state.studentData.coursesPageData);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCoursesPageData());
	}, []);

	return (
		<div>
			<h1>All Corses</h1>
		</div>
	);
};

export default AllCourses;
