import { all } from "redux-saga/effects";
import {
	getDashboardPageData,
	getStagesPageData,
	getQuizPageData,
	getLeaderboardPageData,
	getCoursesPageData,
	getSingleCoursePageData,
} from "./studentDataSaga";
import { getRegCourses } from "./regCoursesSaga";
export default function* rootSaga() {
	yield all([
		getDashboardPageData(),
		getStagesPageData(),
		getQuizPageData(),
		getLeaderboardPageData(),
		getRegCourses(),
		getCoursesPageData(),
		getSingleCoursePageData(),
	]);
}
