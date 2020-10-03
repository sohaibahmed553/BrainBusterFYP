import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {
    DashboardOutlined,
    CopyOutlined,
    BookOutlined,
    LogoutOutlined,
    CommentOutlined,
    BarChartOutlined,
    LaptopOutlined,
} from "@ant-design/icons";

import "../../css/admin/AdminDashboard.css";

import ManageCourses from "./dashboard/ManageCourses/ManageCourses";
import ManageStages from "./dashboard/ManageStages/ManageStages";
import AddQuestions from "./dashboard/ManageQuestions/AddQuestions";
import EditQuestions from "./dashboard/ManageQuestions/EditQuestions/EditQuestions";
import Community from "./dashboard/ManageCommunity/Community";
import Leaderboard from "./dashboard/Leaderboard/Leaderboard";
import Dashboard from "./dashboard/Dashboard/dashboard";
import Profile from "./Profile";
import Logout from "./dashboard/Logout";
import PageNotFound from "../PageNotFound";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Instructor = (props) => {
    return (
        <Router>
            <Layout>
                <Header className="header">
                    <span className="text-white">BrainBuster</span>
                    <Menu
                        className="float-right"
                        theme="dark"
                        mode="horizontal"
                        style={{ lineHeight: "64px" }}
                    >
                        <Menu.Item key="1" className="text-white">
                            {props.instructor.UserName}
                            <Link to="/instructor/profile" />
                        </Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            style={{ height: "100%", borderRight: 0 }}
                        >
                            <Menu.Item key="1">
                                {" "}
                                <span>
                                    <DashboardOutlined />
                                    Dashboard
                                </span>
                                <Link to="/instructor/dashboard" />
                            </Menu.Item>

                            {/*----------------Manage Courses----------------- */}
                            <Menu.Item key="2">
                                <span>
                                    <LaptopOutlined />
                                    Manage Courses
                                </span>{" "}
                                <Link
                                    to="/instructor/managecourses"
                                    aria-current="page"
                                />
                            </Menu.Item>
                            {/*----------------Manage Stages----------------- */}
                            <Menu.Item key="3">
                                <span>
                                    <BookOutlined />
                                    Manage Stages
                                </span>{" "}
                                <Link
                                    to="/instructor/managestages"
                                    aria-current="page"
                                />
                            </Menu.Item>

                            {/*----------------Manage Questions----------------- */}
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <CopyOutlined />
                                        Manage Questions
                                    </span>
                                }
                            >
                                <Menu.Item key="5">
                                    Add
                                    <Link
                                        to="/instructor/addquestions"
                                        aria-current="page"
                                    />
                                </Menu.Item>
                                <Menu.Item key="6">
                                    Edit
                                    <Link
                                        to="/instructor/editquestions"
                                        aria-current="page"
                                    />
                                </Menu.Item>
                            </SubMenu>

                            {/*----------------Manage Community----------------- */}

                            <Menu.Item key="9">
                                <span>
                                    <CommentOutlined />
                                    Community
                                </span>{" "}
                                <Link
                                    to="/instructor/community"
                                    aria-current="page"
                                />
                            </Menu.Item>
                            {/*----------------Leaderboard----------------- */}

                            <Menu.Item key="10">
                                <span>
                                    <BarChartOutlined />
                                    Leaderboard
                                </span>{" "}
                                <Link
                                    to="/instructor/leaderboard"
                                    aria-current="page"
                                />
                            </Menu.Item>
                            {/*----------------Logout----------------- */}
                            <Menu.Item key="11">
                                <span>
                                    <LogoutOutlined />
                                    Logout
                                </span>
                                <Link
                                    to="/instructor/logout"
                                    aria-current="page"
                                />
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Switch>
                                <Route
                                    path="/instructor/dashboard"
                                    component={() => (
                                        <Dashboard
                                            instructor={props.instructor}
                                        />
                                    )}
                                />
                                <Route
                                    path="/instructor/addquestions"
                                    component={() => (
                                        <AddQuestions
                                            instructor={props.instructor}
                                        />
                                    )}
                                />
                                <Route
                                    path="/instructor/editquestions"
                                    component={() => (
                                        <EditQuestions
                                            instructor={props.instructor}
                                        />
                                    )}
                                />
                                <Route
                                    path="/instructor/managecourses"
                                    component={() => (
                                        <ManageCourses
                                            instructor={props.instructor}
                                        />
                                    )}
                                />
                                <Route
                                    path="/instructor/managestages"
                                    component={() => (
                                        <ManageStages
                                            instructor={props.instructor}
                                        />
                                    )}
                                />

                                <Route
                                    path="/instructor/community"
                                    component={() => (
                                        <Community
                                            instructor={props.instructor}
                                        />
                                    )}
                                />
                                <Route
                                    path="/instructor/leaderboard"
                                    component={() => (
                                        <Leaderboard
                                            instructor={props.instructor}
                                        />
                                    )}
                                />

                                <Route
                                    path="/instructor/profile"
                                    component={() => (
                                        <Profile
                                            instructor={props.instructor}
                                        />
                                    )}
                                />

                                <Route
                                    path="/instructor/logout"
                                    component={Logout}
                                />

                                <Route component={PageNotFound} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </Router>
    );
};

export default Instructor;
