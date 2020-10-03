const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const conn = require("../config/db");

//@route Get api/admins/dashboard/:id
//@desc Get dashboard by passing id
//@access Public
router.get("/dashboard/data", async (req, res) => {
	let finalResults = {};
	let sql1 =
		"SELECT CourseName, Code, Status, UserName FROM Courses,Instructors where Courses.InstructorID = Instructors.InstructorID;";
	let sql2 = "Select UserName, NickName, Email, Gender from Instructors;";
	let sql3 = "Select UserName, NickName, Email, Gender from Admins;";
	let sql4 = "select count(AdminID) as adminCount from admins;";
	let sql5 = "select count(InstructorID) as instructorCount from Instructors;";
	let sql6 = "select count(StdID) as studentCount from Students";
	let query = conn.query(sql1 + sql2 + sql3 + sql4 + sql5 + sql6, (err, results) => {
		finalResults.courses = results[0];
		finalResults.instructors = results[1];
		finalResults.admins = results[2];
		finalResults.adminCount = results[3][0].adminCount;
		finalResults.instructorCount = results[4][0].instructorCount;
		finalResults.studentCount = results[5][0].studentCount;

		res.send(finalResults);
	});
});

router.post(
	"/",
	[
		check("Gender", "Please select F or M.").not().isEmpty().isLength({ max: 1 }),
		check("NickName", "Please enter a valid name.").not().isEmpty(),
		check("UserName", "Please enter a valid name.").not().isEmpty(),
		// username must be an email
		check("Email", "Please enter a valid email.").isEmail(),
		// password must be at least 5 chars long
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
				"SELECT * FROM `admins` WHERE `Email` = ? or `UserName` = ?",
				[data.Email, data.UserName],
				async (err, results) => {
					if (results.length) {
						return res.status(400).json({ error: [{ msg: "Username or Email already exists" }] });
					} else {
						//Encrypt password
						const salt = await bcrypt.genSalt(10);
						data.Pass = await bcrypt.hash(data.Pass, salt);

						let sql = "INSERT INTO admins SET ?";
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

//@route Get api/admin/:id
//@desc Get admin by passing id
//@access Public
router.get("/:id", async (req, res) => {
	let sql = "SELECT * FROM admins WHERE AdminID = ?";
	let query = conn.query(sql, [req.params.id], (err, results) => {
		res.send(results);
	});
});

module.exports = router;
