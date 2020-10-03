import React from "react";

import EditStage from "./EditStage";
import DeleteStage from "./DeleteStage";

const SingleStage = (props) => {
    return (
        <tr>
            <td className="align-middle ">{props.stage.StTitle}</td>
            <td className="align-middle ">{props.stage.Tutorial}</td>
            <td className="align-middle ">{props.stage.StDescription}</td>
            <td className="align-middle text-center">
                <EditStage
                    data={props.stage}
                    loadData={props.loadData}
                    instructor={props.instructor}
                />
                <DeleteStage data={props.stage} loadData={props.loadData} />
            </td>
        </tr>
    );
};

export default SingleStage;
