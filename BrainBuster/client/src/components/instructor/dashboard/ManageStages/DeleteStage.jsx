import React from "react";
import { Modal, Button, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const { confirm } = Modal;

const DeleteStage = (props) => {
    const showDeleteConfirm = () => {
        confirm({
            title:
                "Are you sure delete this stage? Every question present in this stage will also be deleted.",
            icon: <ExclamationCircleOutlined />,
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                axios
                    .delete(
                        "http://localhost:4000/api/stages/" + props.data.StID
                    )
                    .then((res) => {
                        message.success("Stage has been deleted.");
                        props.loadData();
                    });
            },
            onCancel() {
                console.log("Cancel");
            },
        });
    };

    return (
        <div>
            <Button onClick={showDeleteConfirm} type="link">
                delete
            </Button>
        </div>
    );
};

export default DeleteStage;
