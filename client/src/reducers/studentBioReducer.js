const studentBioReducer = (state = {}, action) => {
	switch (action.type) {
		case "SET_STUDENT_BIO":
			return action.payload;

		default:
			return state;
	}
};

export default studentBioReducer;
