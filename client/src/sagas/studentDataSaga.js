import { put, takeLatest } from "redux-saga/effects";
// import history from
import axios from "axios";

// GET_DASHBOARD_PAGE_DATA
export const getDashboardPageData = function* () {
  yield takeLatest("GET_DASHBOARD_PAGE_DATA", helperFucntion1);
};

const helperFucntion1 = function* (action) {
  let dashboardPageData;
  const params = new URLSearchParams(window.location.search);
  const courseid = params.get("courseid");
  if (courseid === "") return;
  yield axios
    .get(`/api/students/dashboard/${action.payload}/${courseid}`)
    .then((response) => {
      dashboardPageData = response.data;
    });
  yield put({
    type: "SET_DASHBOARD_PAGE_DATA",
    payload: dashboardPageData,
  });
};

// GET_STAGES_PAGE_DATA
export const getStagesPageData = function* () {
  yield takeLatest("GET_STAGES_PAGE_DATA", helperFunction2);
};

const helperFunction2 = function* (action) {
  let stagesPageData;
  const params = new URLSearchParams(window.location.search);
  const courseid = params.get("courseid");
  if (courseid === "") return;
  yield axios
    .get(`/api/stages/stagedetails/${action.payload}/${courseid}`)
    .then((response) => {
      stagesPageData = response.data;
    });
  yield put({
    type: "SET_STAGES_PAGE_DATA",
    payload: stagesPageData,
  });
};

// GET_QUIZ_PAGE_DATA
export const getQuizPageData = function* () {
  yield takeLatest("GET_QUIZ_PAGE_DATA", helperFunction3);
};

const helperFunction3 = function* () {
  let quizPageData;
  const params = new URLSearchParams(window.location.search);
  const stid = params.get("stid");
  const difficulty = params.get("difficulty");
  yield axios.get(`/api/questions/${stid}/${difficulty}`).then((response) => {
    quizPageData = response.data;
  });
  yield put({
    type: "SET_QUIZ_PAGE_DATA",
    payload: quizPageData,
  });
};

//GET_LEADERBOARD_PAGE_DATA
export const getLeaderboardPageData = function* () {
  yield takeLatest("GET_LEADERBOARD_PAGE_DATA", helperFunction4);
};

const helperFunction4 = function* () {
  let leaderboardData;
  const params = new URLSearchParams(window.location.search);
  const courseid = params.get("courseid");
  yield axios.get(`/api/scores/leaderboard/${courseid}`).then((response) => {
    leaderboardData = response.data;
  });
  yield put({
    type: "SET_LEADERBOARD_PAGE_DATA",
    payload: leaderboardData,
  });
};

//GET_COURSES_PAGE_DATA
export const getCoursesPageData = function* () {
  yield takeLatest("GET_COURSES_PAGE_DATA", helperFucntion5);
};

const helperFucntion5 = function* () {
  let coursesPageData;
  yield axios.get("/api/courses/").then((response) => {
    coursesPageData = response.data;
  });
  yield put({
    type: "SET_COURSES_PAGE_DATA",
    payload: coursesPageData,
  });
};

//GET_SINGLE_COURSE_PAGE_DATA
export const getSingleCoursePageData = function* () {
  yield takeLatest("GET_SINGLE_COURSE_PAGE_DATA", helperFucntion6);
};

const helperFucntion6 = function* () {
  let singleCoursePageData;
  const params = new URLSearchParams(window.location.search);
  const courseid = params.get("courseid");
  if (courseid === "") return;
  yield axios.get(`/api/courses/data/${courseid}`).then((response) => {
    singleCoursePageData = response.data;
  });
  yield put({
    type: "SET_SINGLE_COURSE_PAGE_DATA",
    payload: singleCoursePageData,
  });
};
