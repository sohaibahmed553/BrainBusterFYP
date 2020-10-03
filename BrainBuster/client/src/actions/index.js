export {
	getDashboardPageData,
	getStagesPageData,
	getQuizPageData,
	getCoursesPageData,
	getLeaderboardPageData,
} from "./studentDataActions";
export { setTotal, setCorrect, setWrong, setScore, resetStats, answersRecord } from "./statsActions";
export { setStudentBio } from "./studentBioActions";
export { getRegCourses } from "./regCoursesActions";
export { saveNewBadges } from "./newBadgesActions";
export { showLoader, hideLoader } from "./loadingActions";
