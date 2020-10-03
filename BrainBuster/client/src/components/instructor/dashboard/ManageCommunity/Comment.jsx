import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import axios from "axios";

import ReplyIcon from "./ReplyIcon";

import Reply from "./Reply";
import DeleteComment from "./Delete/DeleteComment";
import EditComment from "./Edit/EditComment";

const Comments = (props) => {
    const [form] = Form.useForm();

    const [replies, setReplies] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [replyCount, setReplyCount] = useState();

    const loadReplies = React.useCallback(async () => {
        axios
            .get(
                "http://localhost:4000/api/comments/replies/" +
                    props.comments.CommentID
            )
            .then((res) => {
                setReplies(res.data);
            });
    }, [props.comments]);

    const loadReplyCount = React.useCallback(async () => {
        axios
            .get(
                "http://localhost:4000/api/comments/replycount/" +
                    props.comments.CommentID
            )
            .then((res) => {
                setReplyCount(res.data.replycount);
            });
    }, [props.comments]);

    const onFinish = (values) => {
        const { reply } = values;
        const NickName = props.instructor.NickName;
        const CommentID = props.comments.CommentID;
        const InstructorID = props.instructor.InstructorID;

        axios
            .post("http://localhost:4000/api/comments/reply", {
                reply,
                NickName,
                CommentID,
                InstructorID,
            })
            .then((res) => {
                message.success("Reply has been added.");
                loadReplies();
                loadReplyCount();
                form.setFieldsValue({
                    reply: "",
                });
            })
            .catch((err) => {});
    };

    React.useEffect(() => {
        setToggle(false);
        loadReplyCount();
    }, [loadReplyCount]);

    const onClickToggle = () => {
        toggle ? setToggle(false) : setToggle(true);
        loadReplies();
    };

    return (
        <React.Fragment>
            <div className="comment-box shadow p-3 mb-3 bg-white rounded ">
                <div className="row">
                    <div className="col-lg-10">
                        <h6>{props.comments.NickName}</h6>
                        <p>{props.comments.Comment}</p>

                        <Button onClick={onClickToggle}>
                            replies
                            <ReplyIcon /> {replyCount}
                        </Button>
                    </div>
                    <div className="col-lg-2">
                        {props.comments.InstructorID ===
                            props.instructor.InstructorID && (
                            <React.Fragment>
                                <DeleteComment
                                    comment={props.comments}
                                    onChangeComment={props.onChangeComment}
                                />
                                <EditComment
                                    comment={props.comments}
                                    onChangeComment={props.onChangeComment}
                                />
                            </React.Fragment>
                        )}
                    </div>
                </div>

                <br />

                {toggle && (
                    <div className="ml-5">
                        {replies.map((replies, index) => (
                            <Reply
                                replies={replies}
                                key={index}
                                instructor={props.instructor}
                                loadReplies={loadReplies}
                                loadReplyCount={loadReplyCount}
                            />
                        ))}
                        <Form form={form} name="reply" onFinish={onFinish}>
                            <div className="row">
                                <div className="col-lg-9">
                                    <Form.Item
                                        name="reply"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "This field is required",
                                            },
                                        ]}
                                    >
                                        <Input.TextArea />
                                    </Form.Item>
                                </div>
                                <div className="col-lg-3">
                                    <Form.Item>
                                        <Button
                                            className="comment-btn"
                                            type="primary"
                                            htmlType="submit"
                                        >
                                            reply
                                        </Button>
                                    </Form.Item>
                                </div>
                            </div>
                        </Form>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default Comments;
