import React from "react";
import { Button, Modal, Form, Input, message } from "antd";
import axios from "axios";

import { EditOutlined } from "@ant-design/icons";

const EditComment = (props) => {
    const [form] = Form.useForm();
    const [visible, setVisible] = React.useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = (e) => {
        setVisible(false);
    };

    const onFinish = async (values) => {
        const { comment } = values;

        await axios
            .put(
                "http://localhost:4000/api/comments/" + props.comment.CommentID,
                {
                    comment,
                }
            )
            .then((res) => {
                props.onChangeComment();
                message.success("Comment has been updated.");
            })
            .catch((err) => {});
        setVisible(false);
    };

    return (
        <React.Fragment>
            <Button onClick={showModal}>
                <EditOutlined />
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
                    form={form}
                    className="mt-3"
                    name="basic"
                    initialValues={{
                        comment: props.comment.Comment,
                    }}
                >
                    <h5 className="d-flex justify-content-center">
                        Edit Comment
                    </h5>
                    <br />
                    <div className="row">
                        <div className="col-lg-1"></div>
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
                        <div className="col-lg-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8"></div>
                        <div className="col-lg-3 ">
                            <Form.Item>
                                <Button
                                    className="w-100"
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Update
                                </Button>
                            </Form.Item>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </Form>
            </Modal>
        </React.Fragment>
    );
};

export default EditComment;
