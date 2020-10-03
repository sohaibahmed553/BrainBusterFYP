import { combineReducers } from "redux";
import studentDataReducer from "./studentDataReducer";
import statsReducer from "./statsReducer";
import studentBioReducer from "./studentBioReducer";
import regCoursesReducer from "./regCoursesReducer";
import newBadgesReducer from "./newBadgesReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
    studentData: studentDataReducer,
    stats: statsReducer,
    studentBio: studentBioReducer,
    regCourses: regCoursesReducer,
    newBadges: newBadgesReducer,
    loading: loadingReducer,
});

export default rootReducer;

// export default persistReducer(persistConfig, rootReducer);
