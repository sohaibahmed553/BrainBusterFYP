import React from "react";

import DeleteReply from "./Delete/DeleteReply";
import EditReply from "./Edit/EditReply";

const Reply = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-9">
                    <h6>{props.replies.NickName}</h6>
                    <p>{props.replies.Reply}</p>
                </div>
                <div className="col-lg-3">
                    {props.instructor.InstructorID ===
                        props.replies.InstructorID && (
                        <span>
                            <DeleteReply
                                reply={props.replies}
                                loadReplies={props.loadReplies}
                                loadReplyCount={props.loadReplyCount}
                            />
                            <EditReply
                                reply={props.replies}
                                loadReplies={props.loadReplies}
                                loadReplyCount={props.loadReplyCount}
                            />
                        </span>
                    )}

                    <br />
                    <br />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Reply;
