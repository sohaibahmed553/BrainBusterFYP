const regCoursesReducer = (state = {}, action) => {
	switch (action.type) {
		case "SET_REG_COURSES":
			return action.payload;

		default:
			return state;
	}
};

export default regCoursesReducer;
