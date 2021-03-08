import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

//GET_REG_COURSES
export const getRegCourses = function* () {
  yield takeLatest("GET_REG_COURSES", helperFunction1);
};

const helperFunction1 = function* (action) {
  let regCourses;
  yield axios.get(`/api/courses/student/${action.payload}`).then((response) => {
    regCourses = response.data;
  });
  yield put({
    type: "SET_REG_COURSES",
    payload: regCourses,
  });
};
