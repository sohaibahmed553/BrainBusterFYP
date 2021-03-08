const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const conn = require("../config/db");

//@route POST api/assignedcourses/:courseid/:stdid
//@desc assign a course to a student
//@access Public
router.post("/:stdid/:courseid", async (req, res) => {
  try {
    let sql = "Select * from AssignedCourses where StdId=? and CourseID = ?";

    await conn.query(
      sql,
      [req.params.stdid, req.params.courseid],
      async (err, results) => {
        if (results.length) {
          return res.status(400).json({
            error: [
              {
                msg: "Student already registered to this course",
              },
            ],
          });
        } else {
          let sql2 = "Insert into AssignedCourses set StdID = ?,CourseID = ?";
          let query = await conn.query(
            sql2,
            [req.params.stdid, req.params.courseid],
            async (err, results) => {
              if (err) throw err;
              let sql3 =
                "insert into Score(StdID,StID) select StdID,StID from Stages,AssignedCourses where Stages.courseID = AssignedCourses.CourseID and Stages.CourseID = ? and AssignedCourses.StdID = ?;";

              await conn.query(
                sql3,
                [req.params.courseid, req.params.stdid],
                (err, results) => {
                  if (err) throw err;
                  res.send("Course is assigned to Student");
                }
              );
            }
          );
        }
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
