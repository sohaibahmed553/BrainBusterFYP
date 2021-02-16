import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../css/App.css";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Profile/Profile";
import Stages from "./Stages/Stages";
import TakeQuiz from "./TakeQuiz/TakeQuiz";
import Leaderboard from "./Leaderboard/Leaderboard";
import BrowseCourses from "./BrowseCourse/BrowseCourse";
import SingleCourse from "./SingleCourse/SingleCourse";
import Community from "./ManageCommunity/Community";
import Faqs from "./Faqs/Faqs";
import Logout from "./Logout/Logout";
import Topbar from "./Common/Topbar";
import { setStudentBio, getRegCourses } from "../../actions";
import { withGetScreen } from "react-getscreen";

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ProfileFilled,
    DashboardFilled,
    OrderedListOutlined,
    FundFilled,
    FileSearchOutlined,
    TeamOutlined,
    QuestionCircleFilled,
    LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Sider, Content } = Layout;

const Student = ({ student, isTablet }) => {
    const [collapsed, setCollapsed] = useState(true);
    const dispatch = useDispatch();

    const params = new URLSearchParams(window.location.search);
    const courseid = params.get("courseid");

    useEffect(() => {
        dispatch(setStudentBio(student));
        dispatch(getRegCourses(student.StdID));
        setCollapsed(true);
    }, [isTablet, dispatch, student]);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div>
            {/* <FullPageLoader /> */}
            <Topbar studentBio={student} />
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    style={{ minHeight: "91vh" }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="1">
                            <Link to={`/student?courseid=${courseid}`}>
                                <DashboardFilled style={{ fontSize: "18px" }} />
                                <span>Dashboard</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={`/student/profile`}>
                                <ProfileFilled style={{ fontSize: "18px" }} />
                                <span>Profile</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to={`/student/stages?courseid=${courseid}`}>
                                <OrderedListOutlined
                                    style={{ fontSize: "18px" }}
                                />
                                <span>Stages</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link
                                to={`/student/leaderboard?courseid=${courseid}`}
                            >
                                <FundFilled style={{ fontSize: "18px" }} />
                                <span>LeaderBoard</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/student/browsecourses">
                                <FileSearchOutlined
                                    style={{ fontSize: "18px" }}
                                />
                                <span>Browse Course</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/student/community">
                                <TeamOutlined style={{ fontSize: "18px" }} />
                                <span>Community</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/student/faqs">
                                <QuestionCircleFilled
                                    style={{ fontSize: "18px" }}
                                />
                                <span>FAQs</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to="/student/logout">
                                <LogoutOutlined style={{ fontSize: "18px" }} />
                                <span>Logout</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <Header
                        className="site-layout-background hide-collape-icon"
                        style={{ paddingLeft: "20px" }}
                    >
                        {React.createElement(
                            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: "trigger",
                                onClick: toggle,
                            }
                        )}
                    </Header>
                    <Content>
                        <Switch>
                            <Route
                                exact
                                path="/student"
                                render={(props) => (
                                    <Dashboard
                                        {...props}
                                        studentBio={student}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/student/profile"
                                render={(props) => (
                                    <Profile {...props} studentBio={student} />
                                )}
                            />
                            <Route
                                exact
                                path="/student/stages"
                                render={(props) => (
                                    <Stages {...props} studentBio={student} />
                                )}
                            />
                            <Route
                                exact
                                path="/student/takequiz"
                                render={(props) => (
                                    <TakeQuiz {...props} studentBio={student} />
                                )}
                            />
                            <Route
                                exact
                                path="/student/leaderboard"
                                render={(props) => (
                                    <Leaderboard
                                        {...props}
                                        studentBio={student}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/student/browsecourses"
                                render={(props) => (
                                    <BrowseCourses
                                        {...props}
                                        studentBio={student}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/student/singlecourse"
                                render={(props) => (
                                    <SingleCourse
                                        {...props}
                                        studentBio={student}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/student/community"
                                render={(props) => (
                                    <Community
                                        {...props}
                                        studentBio={student}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/student/faqs"
                                render={(props) => (
                                    <Faqs {...props} studentBio={student} />
                                )}
                            />
                            <Route
                                exact
                                path="/student/logout"
                                render={(props) => (
                                    <Logout {...props} studentBio={student} />
                                )}
                            />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default withGetScreen(Student);
