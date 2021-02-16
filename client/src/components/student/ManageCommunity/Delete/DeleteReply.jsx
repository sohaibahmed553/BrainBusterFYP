import React from "react";
import axios from "axios";

import { Button, Modal, message } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const DeleteReply = (props) => {
    function showDeleteConfirm() {
        confirm({
            title: "Are you sure delete this reply?",
            icon: <ExclamationCircleOutlined />,
            content: "",
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                axios
                    .delete(
                        "http://localhost:4000/api/comments/reply/" +
                            props.reply.ReplyID
                    )
                    .then((res) => {
                        message.success("Reply has been deleted.");
                        props.loadReplies();
                        props.loadReplyCount();
                    });
            },
            onCancel() {
                console.log("Cancel");
            },
        });
    }
    return (
        <React.Fragment>
            <Button onClick={showDeleteConfirm}>
                <DeleteOutlined />
            </Button>
        </React.Fragment>
    );
};

export default DeleteReply;
