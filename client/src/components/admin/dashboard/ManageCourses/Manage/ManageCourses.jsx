import React from "react";
import axios from "axios";
import { Empty } from "antd";

import SingleCourse from "./SingleCourse";

const ManageCourse = (props) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const loadData = async () => {
    await axios.get("/api/courses/courses").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    !loading && (
      <React.Fragment>
        <br />

        {data.length !== 0 && (
          <div>
            <table className="table table-hover table-bordered small">
              <thead>
                <tr className="table-secondary">
                  <th className="w-50 text-center">CourseName</th>
                  <th className="w-25 text-center">Code</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => (
                  <SingleCourse data={data} key={index} loadData={loadData} />
                ))}
              </tbody>
            </table>
          </div>
        )}
        {data.length === 0 && (
          <Empty
            description={<span>You have not created any course yet</span>}
          />
        )}
      </React.Fragment>
    )
  );
};

export default ManageCourse;
