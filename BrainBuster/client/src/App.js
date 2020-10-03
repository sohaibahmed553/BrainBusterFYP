import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/admin/Admin";
import Student from "./components/student/Student";
import Instructor from "./components/instructor/Instructor";
import AdminRoute from "./components/admin/routing/AdminRoute";
import StudentRoute from "./components/student/routing/StudentRoute";
import InstructorRoute from "./components/instructor/routing/InstructorRoute";
import PageNotFound from "./components/PageNotFound";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/register" component={Register} />
				<AdminRoute path="/admin" component={Admin} />
				<StudentRoute path="/student" component={Student} />
				<InstructorRoute path="/instructor" component={Instructor} />
				<Route component={PageNotFound} />
			</Switch>
		</>
	);
}

export default App;
