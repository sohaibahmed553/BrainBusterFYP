import React from "react";
import { Typography, Avatar, Empty } from "antd";
import "./RegCourses.css";

const { Text } = Typography;

const RegCourses = ({ regCourses, studentBio }) => {
  /*
	const [percentage, setPercentage] = useState(0);

	const getPercentage = (courseid) => {
		axios.get(`/api/courses/percentage/${studentBio.StdID}/${courseid}`).then((response) => {
			setPercentage(response.data.percentage);
		});
	};*/

  return (
    <div className="">
      <div className="courseTitle">
        {/* <Button type="primary" style={{ float: "right", marginTop: "15px" }}>
					My courses
				</Button> */}
        <Text> Courses</Text>
        <br />
        <Text disabled style={{ fontSize: "12px" }}>
          YOUR RECENT COURSES
        </Text>
      </div>
      <div className="course">
        {regCourses.length ? (
          regCourses.map((course, index) => (
            <div key={index} style={{ display: "flex" }}>
              <div
                style={{
                  justifyContent: "left",
                  width: "100px",
                }}
              >
                <Avatar
                  shape="square"
                  style={{ width: "80px", height: "50px" }}
                  src={"/" + course.CAvatar}
                />
              </div>
              <div style={{ justifyContent: "left" }}>
                <Text className="courseName" style={{ width: "100%" }}>
                  {course.CourseName}
                </Text>
                <br />
                {/* {getPercentage(course.CourseID)} */}
                {/* <Progress percent={60} size="large" style={{ width: "200px" }} /> */}
              </div>
              <br />
              <br />
              <br />
            </div>
          ))
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
      {/* <div className="noData">
				<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{ margin: "0px" }} />
			</div> */}
    </div>
  );
};

export default RegCourses;
