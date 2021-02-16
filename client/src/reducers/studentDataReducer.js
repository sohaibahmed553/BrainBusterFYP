const studentDataReducer = (state = {}, action) => {
	switch (action.type) {
		case "SET_DASHBOARD_PAGE_DATA":
			state.dashboardPageData = action.payload;
			return state;
		case "SET_STAGES_PAGE_DATA":
			state.stagesPageData = action.payload;
			return state;
		case "SET_QUIZ_PAGE_DATA":
			state.quizPageData = action.payload;
			return state;
		case "SET_LEADERBOARD_PAGE_DATA":
			state.leaderboardPageData = action.payload;
			return state;
		case "SET_COURSES_PAGE_DATA":
			state.coursesPageData = action.payload;
			return state;
		case "SET_SINGLE_COURSE_PAGE_DATA":
			state.singleCoursePageData = action.payload;
			return state;

		default:
			return state;
	}
};

export default studentDataReducer;
