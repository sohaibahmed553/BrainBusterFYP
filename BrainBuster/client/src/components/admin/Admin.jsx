import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {
    LaptopOutlined,
    DashboardOutlined,
    UserAddOutlined,
    LogoutOutlined,
    TeamOutlined,
} from "@ant-design/icons";

import Profile from "./Profile";
import Dashboard from "./dashboard/Dashboard/Dashboard";
import AddAdmin from "./dashboard/AddAdmin";
import AddInstructor from "./dashboard/AddInstructor";
import AddCourse from "./dashboard/ManageCourses/AddCourse";
import ManageCourses from "./dashboard/ManageCourses/Manage/ManageCourses";
import Logout from "./dashboard/Logout";
import PageNotFound from "../PageNotFound";

import "antd/dist/antd.css";
import "../../css/admin/AdminDashboard.css";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Admin = (props) => {
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
                            {props.admin.UserName}
                            <Link to="/admin/profile" />
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
                                <Link to="/admin/dashboard" />
                            </Menu.Item>

                            {/*----------------Manage Courses----------------- */}
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <LaptopOutlined />
                                        Manage Courses
                                    </span>
                                }
                            >
                                <Menu.Item key="2">
                                    Add
                                    <Link
                                        to="/admin/addcourse"
                                        aria-current="page"
                                    />
                                </Menu.Item>
                                <Menu.Item key="3">
                                    Status
                                    <Link
                                        to="/admin/managecourses"
                                        aria-current="page"
                                    />
                                </Menu.Item>
                            </SubMenu>

                            {/*----------------Add Admin----------------- */}

                            <Menu.Item key="7">
                                <span>
                                    <UserAddOutlined />
                                    Add Admin
                                </span>
                                <Link
                                    to="/admin/addadmin"
                                    aria-current="page"
                                />
                            </Menu.Item>

                            {/*----------------Add Instructor----------------- */}

                            <Menu.Item key="8">
                                <span>
                                    <TeamOutlined />
                                    Add Instructor
                                </span>
                                <Link
                                    to="/admin/addinstructor"
                                    aria-current="page"
                                />
                            </Menu.Item>

                            {/*----------------Logout----------------- */}
                            <Menu.Item key="9">
                                <span>
                                    <LogoutOutlined />
                                    Logout
                                </span>
                                <Link to="/admin/logout" aria-current="page" />
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
                                    path="/admin/dashboard"
                                    component={Dashboard}
                                />

                                <Route
                                    path="/admin/addcourse"
                                    component={AddCourse}
                                />
                                <Route
                                    path="/admin/managecourses"
                                    component={ManageCourses}
                                />

                                <Route
                                    path="/admin/addadmin"
                                    component={AddAdmin}
                                />
                                <Route
                                    path="/admin/addinstructor"
                                    component={AddInstructor}
                                />
                                <Route
                                    path="/admin/logout"
                                    component={Logout}
                                />

                                <Route
                                    path="/admin/profile"
                                    component={() => (
                                        <Profile admin={props.admin} />
                                    )}
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

export default Admin;
