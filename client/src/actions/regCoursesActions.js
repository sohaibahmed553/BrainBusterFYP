export const getRegCourses = (stdid) => {
	return {
		type: "GET_REG_COURSES",
		payload: stdid,
	};
};
