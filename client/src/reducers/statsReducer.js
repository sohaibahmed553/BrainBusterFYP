const initialState = {
	total: 10,
	correct: 0,
	wrong: 0,
	score: 0,
	answersRecord: [],
};

const statsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_TOTAL":
			state.total = action.payload;
			return state;

		case "SET_CORRECT":
			state.correct += action.payload;
			return state;

		case "SET_WRONG":
			state.wrong += action.payload;
			return state;

		case "SET_SCORE":
			state.score += action.payload;
			return state;

		case "RESET_STATS":
			return {
				total: 10,
				correct: 0,
				wrong: 0,
				score: 0,
				answersRecord: [],
			};

		case "ANSWERS_RECORD":
			state.answersRecord.push(action.payload);
			return state;

		default:
			return state;
	}
};

export default statsReducer;
