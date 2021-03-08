import React from "react";
import { Button, Modal, message } from "antd";
import axios from "axios";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const DeleteComment = (props) => {
  function showDeleteConfirm() {
    confirm({
      title:
        "Are you sure delete this comment? All the replies will also be deleted.",
      icon: <ExclamationCircleOutlined />,
      content: "",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        axios.delete("/api/comments/" + props.comment.CommentID).then((res) => {
          message.success("Comment has been deleted.");
          props.onChangeComment();
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

export default DeleteComment;
