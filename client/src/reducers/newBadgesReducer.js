const newBadgesReducer = (state = [], action) => {
	switch (action.type) {
		case "SAVE_NEW_BADGES":
			return action.payload;

		default:
			return state;
	}
};

export default newBadgesReducer;
