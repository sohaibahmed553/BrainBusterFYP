const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const conn = require("../config/db");


//@route Get api/dashboard/:courseid
//@desc Get dashboard of instructor
//@access Public
router.get("/dashboard/:courseid/", async (req, res) => {
    let finalResults = {};
    let sql1 =
        "SELECT NickName,TotalScore from ScoresOfStudents where CourseId=? order by TotalScore desc;";
    let sql2 =
        "select count(StId) as stageCount from Stages where CourseID = ?;";
    let sql3 =
        "select count(QID) as questionCount from Questions,Stages where questions.StID = stages.StID and CourseID = ?;";
    let sql4 =
        "select count(StdID) as studentCount from assignedcourses where CourseID = ?;";

    conn.query(
        sql1 + sql2 + sql3 + sql4,
        [
            req.params.courseid,
            req.params.courseid,
            req.params.courseid,
            req.params.courseid,
        ],
        (err, results) => {
            finalResults.leaderboard = results[0];
            finalResults.stageCount = results[1][0].stageCount;
            finalResults.questionCount = results[2][0].questionCount;
            finalResults.studentCount = results[3][0].studentCount;

            res.send(finalResults);
        }
    );
});

router.post(
	"/",
	[
		check("Gender", "Please select F or M.").not().isEmpty().isLength({ max: 1 }),
		check("NickName", "Please enter a valid name.").not().isEmpty(),
		check("UserName", "Please enter a valid name.").not().isEmpty(),
		// username must be an email
		check("Email", "Please enter a valid email.").isEmail(),
		// password must be at least 6 chars long
		check("Pass", "Enter password of atleast 6 characters.").isLength({
			min: 6,
		}),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		let date_ob = new Date();
		// current date
		// adjust 0 before single digit date
		let date = ("0" + date_ob.getDate()).slice(-2);
		// current month
		let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
		// current year
		let year = date_ob.getFullYear();

		let data = {
			Gender: req.body.Gender,
			Email: req.body.Email,
			UserName: req.body.UserName,
			NickName: req.body.NickName,
			Pass: req.body.Pass,
			RegDate: year + "-" + month + "-" + date,
		};

		try {
			//check if user exists
			conn.query(
				"SELECT * FROM `instructors` WHERE `Email` = ? or `UserName` = ?",
				[data.Email, data.UserName],
				async (err, results) => {
					if (results.length) {
						return res.status(400).json({ error: [{ msg: "Username or Email already exists" }] });
					} else {
						//Encrypt password
						const salt = await bcrypt.genSalt(10);
						data.Pass = await bcrypt.hash(data.Pass, salt);

						let sql = "INSERT INTO instructors SET ?";
						conn.query(sql, data, async (err, results) => {
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

//@route Get api/instructors
//@desc Get all instructors
//@access Public
router.get("/", async (req, res) => {
	let sql = "SELECT InstructorId, UserName FROM instructors";
	let query = conn.query(sql, [req.params.id], (err, results) => {
		res.send(results);
	});
});

//@route Get api/instructor/:id
//@desc Get instructor by passing id
//@access Public
router.get("/:id", async (req, res) => {
	let sql = "SELECT * FROM instructors WHERE InstructorID = ?";
	let query = conn.query(sql, [req.params.id], (err, results) => {
		res.send(results);
	});
});

module.exports = router;
