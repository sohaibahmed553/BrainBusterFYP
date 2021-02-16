const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const mysql = require("mysql");
const multer = require("multer");

const conn = require("../config/db");

const { check, validationResult } = require("express-validator");

//Multer image store for course start

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    //accept file
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
        //reject file
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,

    limits: {
        fileSize: 1024 * 1024 * 5,
    },

    fileFilter: fileFilter,
});

//Multer image store for course end

//@route Get api/courses/
//@desc get all courses with status 1
//@access Public
router.get("/", async (req, res) => {
    let sql =
        "select CourseID, CourseName, CAvatar, CourseDescription, instructors.InstructorID, NickName from courses,instructors where courses.InstructorID = instructors.InstructorID and status = 1";
    let query = conn.query(sql, (err, results) => {
        res.send(results);
    });
});

//@route Get api/courses/courses/
//@desc get all courses
//@access Public
router.get("/courses", async (req, res) => {
    let sql = "select CourseID, CourseName, Code, Status from Courses";
    let query = conn.query(sql, (err, results) => {
        res.send(results);
    });
});

//@route Get api/courses/data/:courseid
//@desc pass courseid and get all the data of courses, instructor name and all the stages of that course
//@access Public
router.get("/data/:courseid", async (req, res) => {
    let sql =
        "Select CourseName,CAvatar,CourseDescription,Code,NickName as Instructor  from Courses,instructors where Courses.InstructorId = Instructors.InstructorID and CourseId = ?";
    let sql2 =
        "Select StID, StTitle,StDescription from stages where CourseID = ?";
    let finalResult = {};

    await conn.query(
        sql + ";" + sql2,
        [req.params.courseid, req.params.courseid],
        (err, results) => {
            finalResult.CourseDetail = results[0][0];
            finalResult.Stages = results[1];
            res.send(finalResult);
        }
    );
});

//@route Get api/courses/student/:stdid
//@desc get all courses registered by a student when passing student id
//@access Public
router.get("/student/:stdid", async (req, res) => {
    let sql =
        "select courses.CourseID,CourseName, CAvatar from assignedcourses, courses where assignedcourses.CourseID = courses.CourseID and StdID=?";
    let query = conn.query(sql, [req.params.stdid], (err, results) => {
        res.send(results);
    });
});

//@route Get api/courses/percentage/:stdid/:courseid
//@desc get percentage of a course completed by a student by passing student and course id
//@access Public
router.get("/percentage/:stdid/:courseid", async (req, res) => {
    let sql1 =
        "select count(StId) as stagesCount from stages where courseid = ?;";
    let sql2 =
        "select count(EasyScore) easyCount from Stages,Score where Stages.StID = Score.StID and CourseId=? and StdID = ? and EasyScore>0;";
    let sql3 =
        "select count(MediumScore) mediumCount from Stages,Score where Stages.StID = Score.StID and CourseId=? and StdID = ? and MediumScore>0;";
    let sql4 =
        "select count(HardScore) hardCount from Stages,Score where Stages.StID = Score.StID and CourseId=? and StdID = ? and HardScore>0;";
    let finalResults = {};

    let query = conn.query(
        sql1 + sql2 + sql3 + sql4,
        [
            req.params.courseid,
            req.params.courseid,
            req.params.stdid,
            req.params.courseid,
            req.params.stdid,
            req.params.courseid,
            req.params.stdid,
        ],
        (err, results) => {
            let percentage =
                ((results[1][0].easyCount +
                    results[2][0].mediumCount +
                    results[3][0].hardCount) /
                    (results[0][0].stagesCount * 3)) *
                100;

            finalResults.percentage = percentage;
            res.send(finalResults);
        }
    );
});

//@route Get api/courses/:id
//@desc pass instructor id and get course
//@access Public
router.get("/:id", async (req, res, next) => {
    let sql = "SELECT * FROM courses WHERE InstructorID = ?";
    let query = conn.query(sql, [req.params.id], (err, results) => {
        res.send(results);
    });
});

//@route Get api/courses/managestages/:id
//@desc pass instructor id and get course having status 0
//@access Public
router.get("/managestages/:id", async (req, res, next) => {
    let sql = "SELECT * FROM courses WHERE InstructorID = ? and status = 0";
    let query = conn.query(sql, [req.params.id], (err, results) => {
        res.send(results);
    });
});

//@route Get api/courses/stage/:StID
//@desc pass stage id and get course name
//@access Public
router.get("/stage/:StID", async (req, res) => {
    let sql =
        "select CourseName from courses where courseId = (select courseId from stages where StID = ?)";
    let query = conn.query(sql, [req.params.StID], (err, results) => {
        res.send(results);
    });
});

//@route Get api/courses/countstages/:CourseID
//@desc pass course id and get stage count
//@access Public
router.get("/countstages/:CourseID", async (req, res) => {
    let sql =
        "select count(StID) as totalStages from Stages where courseId = ?";
    let query = conn.query(sql, [req.params.CourseID], (err, results) => {
        res.send(results);
    });
});

//@route Get api/courses/eachstage/:CourseID
//@desc pass course id and get questions count
//@access Public
router.get("/eachstage/:CourseID", async (req, res) => {
    try {
        let sql = "select StID from Stages where courseID = ?";
        conn.query(sql, [req.params.CourseID], async (err, results) => {
            res.send(results);
        });
    } catch (err) {
        if (err) throw err;
    }
});

//@route Get api/courses/allow/:StID
//@desc pass stage and get questions count
//@access Public
router.get("/allow/:StID", async (req, res) => {
    let allow = 1;
    try {
        let sql =
            "select Difficulty, count(QID) as questions from questions where StID = ? group by Difficulty";
        conn.query(sql, [req.params.StID], async (err, results) => {
            if (results.length === 0) allow = 0;
            for (let i = 0; i < results.length; i++) {
                if (results[i].questions < 5) allow = 0;
            }
            res.json(allow);
        });
    } catch (err) {
        if (err) throw err;
    }
});

//@route Get api/courses/allow
//@desc check that course is allowed to change to online or not (i.e. each stage has 15 questions in every difficulty)
//@access Public
router.get("/allow/:courseid", async (req, res) => {
    let allow = 1;
    try {
        let sql =
            "select stages.StID,Difficulty,count(questions) as QuestionCount from stages,questions where stages.StID = questions.StID and CourseID = ? group by Difficulty, stages.StId";
        conn.query(sql, [req.params.courseid], async (err, results) => {
            results.map((result, index) => {
                if (result.QuestionCount < 15) allow = 0;
            });
            res.send({ allow });
        });
    } catch (err) {
        if (err) throw err;
    }
});

//@route Get api/courses/codes/:CourseID
//@desc pass course id and get all the course code
//@access Public
router.get("/codes/:code", async (req, res) => {
    try {
        let sql = "select * from Courses where code = ?";
        await conn.query(sql, [req.params.code], async (err, results) => {
            results.length ? (allow = 0) : (allow = 1);
            res.send({ allow });
        });
    } catch (err) {
        if (err) throw err;
    }
});

//@route Post api/courses
//@desc add new course
//@access Public
router.post(
    "/",
    upload.single("file"),

    async (req, res) => {
        console.log(req.file);
        let data = {
            CourseName: req.body.coursename,
            InstructorID: req.body.instructorid,
            CourseDescription: req.body.description,
            Code: req.body.code,
            CAvatar: req.file.path,
        };

        try {
            await conn.query(
                "select * from courses where code = ?",
                [data.Code],
                async (err, results) => {
                    if (results.length) {
                        return res.status(400).json({
                            error: [{ msg: "Course code already exists." }],
                        });
                    } else {
                        let sql = "Insert into courses set ?";
                        await conn.query(sql, data, (err, results) => {
                            if (err) throw err;

                            res.send(results);
                        });
                    }
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    }
);

//@route Put api/courses/status/:id
//@desc update the status of course to 1
//@access Public
router.put("/status/:id", async (req, res) => {
    try {
        let sql = "Update Courses set Status = 1 where CourseID=?";
        let query = await conn.query(sql, [req.params.id], (err, results) => {
            if (err) throw err;
            res.send(results);
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
