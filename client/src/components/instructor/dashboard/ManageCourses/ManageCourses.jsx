import React from "react";
import axios from "axios";
import { Empty } from "antd";

import SingleCourse from "./SingleCourse";
//import AddCourse from "./AddCourse";

const ManageCourses = (props) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const loadData = React.useCallback(async () => {
        await axios
            .get(
                "http://localhost:4000/api/courses/" +
                    props.instructor.InstructorID
            )
            .then((res) => {
                setData(res.data);
                setLoading(false);
            });
    }, [props.instructor]);

    React.useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        !loading && (
            <React.Fragment>
                <br />

                {data.length !== 0 && (
                    <div>
                        <table className="table table-striped table-sm table-bordered small">
                            <thead>
                                <tr>
                                    <th className="w-50">CourseName</th>
                                    <th className="w-25">Code</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((data, index) => (
                                    <SingleCourse
                                        data={data}
                                        key={index}
                                        loadData={loadData}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {data.length === 0 && (
                    <Empty
                        description={
                            <span>You have not created any course yet</span>
                        }
                    />
                )}
            </React.Fragment>
        )
    );
};

export default ManageCourses;
