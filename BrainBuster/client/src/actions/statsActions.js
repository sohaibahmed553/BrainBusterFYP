export const setTotal = (total) => {
	return {
		type: "SET_TOTAL",
		payload: total,
	};
};

export const setCorrect = (correct) => {
	return {
		type: "SET_CORRECT",
		payload: correct,
	};
};

export const setWrong = (wrong) => {
	return {
		type: "SET_WRONG",
		payload: wrong,
	};
};

export const setScore = (score) => {
	return {
		type: "SET_SCORE",
		payload: score,
	};
};

export const resetStats = () => {
	return {
		type: "RESET_STATS",
	};
};

export const answersRecord = (isCorrect) => {
	return {
		type: "ANSWERS_RECORD",
		payload: isCorrect,
	};
};
