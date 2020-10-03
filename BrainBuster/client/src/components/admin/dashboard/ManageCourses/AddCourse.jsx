import React from "react";
import { Select, Form, Col, Row, Input, Button, message } from "antd";
import axios from "axios";

const { Option } = Select;

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 18,
    },
};

const leftOptionsLayout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 14,
    },
};

const rightOptionsLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

const AddCourse = (props) => {
    const [form] = Form.useForm();
    const [instructors, setInstructors] = React.useState([]);
    const [file, setFile] = React.useState();

    const loadInstructors = () => {
        axios.get("http://localhost:4000/api/instructors/").then((res) => {
            setInstructors(res.data);
        });
    };

    const onFinish = (values) => {
        if (
            (file.type === "image/jpeg" ||
                file.type === "image/jpg" ||
                file.type === "image/png") &&
            file.size <= 1024 * 1024 * 5
        ) {
            const { coursename, instructorid, description, code } = values;

            //check that code is already present in the database or not i.e its unique or not
            axios
                .get("http://localhost:4000/api/courses/codes/" + code)
                .then((res) => {
                    const unique = res.data.allow;

                    if (unique) {
                        const fd = new FormData();
                        fd.append(
                            "file",
                            file,
                            file.type === "image/jpeg"
                                ? code + ".jpg"
                                : code + ".png"
                        );
                        fd.append("coursename", coursename);
                        fd.append("instructorid", instructorid);
                        fd.append("description", description);
                        fd.append("code", code);

                        axios({
                            method: "post",
                            url: "http://localhost:4000/api/courses",
                            data: fd,
                            headers: {
                                "content-type": `multipart/form-data; boundary=${fd._boundary}`,
                            },
                        })
                            .then((res) => {
                                console.log(res);
                                form.resetFields();
                                message.success("Course added successfully");
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    } else {
                        message.error("Please fill a unique course code.");
                    }
                });
        } else {
            message.error(
                "File should be in jpg or png format and size should be less than 5MB"
            );
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    React.useEffect(() => {
        loadInstructors();
    }, []);

    return (
        <React.Fragment>
            <br />
            <br />
            <Form
                {...layout}
                form={form}
                className="mt-1"
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <h5 className="d-flex justify-content-center">
                    Add a new Course
                </h5>
                <br />
                <br />

                {/*--------------------------Course Name and Instructor--------------------- */}

                <Row>
                    <Col span={12}>
                        <Form.Item
                            {...leftOptionsLayout}
                            label="CourseName"
                            name="coursename"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input course name",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            {...rightOptionsLayout}
                            label="Instructor"
                            name="instructorid"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select instructor",
                                },
                            ]}
                        >
                            <Select placeholder="Select Instructor">
                                {instructors.map((instructor) => (
                                    <Option
                                        key={instructor.InstructorId}
                                        value={instructor.InstructorId}
                                    >
                                        {instructor.UserName}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                {/*--------------------------Course Description and Code--------------------- */}

                <Row>
                    <Col span={12}>
                        <Form.Item
                            {...leftOptionsLayout}
                            label="Description"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input course description",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            {...rightOptionsLayout}
                            label="Code"
                            name="code"
                            rules={[
                                {
                                    required: true,
                                    max: 7,
                                    message:
                                        "Please input course code of maximum 7 characters",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                {/*--------------------------File Upload--------------------- */}

                <Row>
                    <Col span={12}>
                        <Form.Item
                            {...leftOptionsLayout}
                            label="Avatar"
                            name="avatar"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input course avatar",
                                },
                            ]}
                        >
                            <Input type="file" onChange={onFileChange} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={9}></Col>
                    <Col span={6}>
                        <Form.Item className="d-flex justify-content-center">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-100"
                            >
                                Add
                            </Button>
                        </Form.Item>
                    </Col>
                    <Col span={9}></Col>
                </Row>
            </Form>
        </React.Fragment>
    );
};

export default AddCourse;
