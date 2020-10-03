export const saveNewBadges = (newBadgesList) => {
	return {
		type: "SAVE_NEW_BADGES",
		payload: newBadgesList,
	};
};
