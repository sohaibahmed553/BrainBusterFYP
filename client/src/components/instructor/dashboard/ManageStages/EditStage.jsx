import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, message, Modal } from "antd";
import axios from "axios";

const { Option } = Select;

//layouts for form
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 18,
    span: 4,
  },
};

const EditStage = (props) => {
  const [form] = Form.useForm();

  const [visible, setVisible] = React.useState(false);

  const [courses, setCourses] = React.useState([]);

  //load all courses of the instructor
  const loadCourses = React.useCallback(async () => {
    await axios
      .get("/api/courses/managestages/" + props.instructor.InstructorID)
      .then((res) => {
        setCourses(res.data);
      });
  }, [props.instructor]);

  React.useEffect(() => {
    // console.log("Sending Axios Get");
    loadCourses();
  }, [loadCourses]);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const onUpdate = (values) => {
    const { course, stage, tutorial, description } = values;
    axios
      .put("/api/stages/" + props.data.StID, {
        course,
        stage,
        tutorial,
        description,
      })
      .then((res) => {
        props.loadData();
        message.success("Stage has been updated.");
      })
      .catch((err) => {});
  };

  const onFinish = (values) => {
    onUpdate(values);
    setVisible(false);
  };

  return (
    <div>
      <Button type="link" onClick={showModal}>
        edit
      </Button>
      <Modal
        className="w-50"
        centered
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          onFinish={onFinish}
          {...layout}
          form={form}
          className="mt-1"
          name="basic"
          initialValues={{
            stage: props.data.StTitle,
            tutorial: props.data.Tutorial,
            description: props.data.StDescription,
          }}
        >
          <h5 className="d-flex justify-content-center">Edit Stage</h5>
          <br />

          {/*--------------------------Select Course--------------------- */}
          <Form.Item
            label="Select Course"
            name="course"
            rules={[
              {
                required: true,
                message: "Please select course!",
              },
            ]}
          >
            <Select placeholder="Select Course">
              {courses.map((courses) => (
                <Option key={courses.CourseID} value={courses.CourseID}>
                  {courses.CourseName}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {/*--------------------------Stage Title--------------------- */}
          <Form.Item
            label="Stage Title"
            name="stage"
            rules={[
              {
                required: true,
                message: "Please input Stage Title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/*--------------------------Tutorial Link--------------------- */}
          <Form.Item
            label="Tutorial Link"
            name="tutorial"
            rules={[
              {
                required: true,
                message: "Please input Tutorial link!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/*--------------------------Stage Description--------------------- */}
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input Stage Description!",
              },
            ]}
          >
            <Input.TextArea rows={3} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className="w-100">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EditStage;
