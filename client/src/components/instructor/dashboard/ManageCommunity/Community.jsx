import React, { useState } from "react";
import { Form, Empty, Select, Input, Button, message } from "antd";
import axios from "axios";
import "../../../../css/instructor/comments.css";

import Comment from "./Comment";

import FormItem from "antd/lib/form/FormItem";

const { Option } = Select;

const Community = (props) => {
  const [form] = Form.useForm();

  const [courses, setCourses] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState();

  const onCourseChange = (courseid) => {
    setSelectedCourse(courseid);
    axios.get("/api/comments/" + courseid).then((res) => {
      setComments(res.data);
    });
  };
  const onChangeComment = () => {
    axios.get("/api/comments/" + selectedCourse).then((res) => {
      setComments(res.data);
    });
  };

  const onFinish = (values) => {
    const { courseid, comment } = values;
    const NickName = props.instructor.NickName;
    const InstructorID = props.instructor.InstructorID;

    axios
      .post("/api/comments/", {
        courseid,
        comment,
        NickName,
        InstructorID,
      })
      .then((res) => {
        onCourseChange(courseid);
        message.success("Comment has been added.");
        form.setFieldsValue({
          comment: "",
        });
      })
      .catch((err) => {});
  };

  const loadCourses = React.useCallback(async () => {
    axios.get("/api/courses/" + props.instructor.InstructorID).then((res) => {
      setCourses(res.data);
    });
  }, [props.instructor]);

  React.useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  return (
    <React.Fragment>
      <h5 className="d-flex justify-content-center">Community</h5>
      <Form form={form} name="community" onFinish={onFinish}>
        <FormItem
          name="courseid"
          rules={[
            {
              required: true,
              message: "Please select course!",
            },
          ]}
        >
          <Select
            className="w-25"
            placeholder="Select Course"
            onChange={(option) => {
              onCourseChange(option);
            }}
          >
            {courses.map((courses) => (
              <Option key={courses.CourseID} value={courses.CourseID}>
                {courses.CourseName}
              </Option>
            ))}
          </Select>
        </FormItem>
        <div className="row">
          <div className="col-lg-10">
            <Form.Item
              name="comment"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </div>
          <div className="col-lg-2">
            <Form.Item>
              <Button className="comment-btn" type="primary" htmlType="submit">
                comment
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>

      {!comments.length && <Empty />}

      {comments.length !== 0 && (
        <div>
          {comments.map((comments, index) => (
            <Comment
              comments={comments}
              instructor={props.instructor}
              key={index}
              onChangeComment={onChangeComment}
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Community;
