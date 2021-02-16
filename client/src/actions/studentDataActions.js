export const getDashboardPageData = (StdID) => {
	return {
		type: "GET_DASHBOARD_PAGE_DATA",
		payload: StdID,
	};
};

export const getStagesPageData = (StdID) => {
	return {
		type: "GET_STAGES_PAGE_DATA",
		payload: StdID,
	};
};

export const getQuizPageData = () => {
	return {
		type: "GET_QUIZ_PAGE_DATA",
	};
};

export const getLeaderboardPageData = () => {
	return {
		type: "GET_LEADERBOARD_PAGE_DATA",
	};
};

export const getCoursesPageData = () => {
	return {
		type: "GET_COURSES_PAGE_DATA",
	};
};

export const getSingleCoursePageData = () => {
	return {
		type: "GET_SINGLE_COURSE_PAGE_DATA",
	};
};
