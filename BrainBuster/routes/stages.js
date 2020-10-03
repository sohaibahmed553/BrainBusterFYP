const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const mysql = require("mysql");
const conn = require("../config/db");

const { check, validationResult } = require("express-validator");

//@route Get api/stages
//@desc get all stages
//@access Public
router.get("/", async (req, res, next) => {
	let sql = "SELECT * FROM score";
	let query = await conn.query(sql, (err, results) => {
		res.send(results);
	});
});

//@route Get api/stages/:StdId/:CourseID
//@desc get all stages, score and course name #stagespage
//@access Public
router.get("/stagedetails/:StdId/:courseid", async (req, res) => {
	let sql =
		"select stages.StID, StTitle, Tutorial, EasyScore, MediumScore, HardScore from stages, score where score.stid = stages.StID and StdID = ? and CourseID = ?";

	let query = await conn.query(sql, [req.params.StdId, req.params.courseid], (err, results) => {
		res.send(results);
	});
});

//@route Get api/stages/:courseid
//@desc get stages with course id
//@access Public
router.get("/:courseid", async (req, res, next) => {
	let sql = "SELECT * FROM stages WHERE CourseID=" + req.params.courseid;
	let query = conn.query(sql, (err, results) => {
		res.send(results);
	});
});

//@route Post api/stages
//@desc add new stage
//@access Public
router.post(
	"/",
	[
		check("course", "Please enter course name.").not().isEmpty(),
		check("stage", "Please enter stage.").not().isEmpty(),
		check("tutorial", "Please enter stage.").not().isEmpty(),
		check("description", "Please enter stage.").not().isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		let data = {
			CourseID: req.body.course,
			StTitle: req.body.stage,
			Tutorial: req.body.tutorial,
			StDescription: req.body.description,
		};

		try {
			let sql = "Insert into stages set ?";
			let query = await conn.query(sql, data, (err, results) => {
				if (err) throw err;
				res.send(results);
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	}
);

//@route Put api/stages/:id
//@desc update the name or course of a stage
//@access Public
router.put(
	"/:id",
	[
		check("course", "Please enter course name.").not().isEmpty(),
		check("stage", "Please enter stage.").not().isEmpty(),
		check("tutorial", "Please enter tutorial.").not().isEmpty(),
		check("description", "Please enter description.").not().isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		let data = {
			CourseID: req.body.course,
			StTitle: req.body.stage,
			Tutorial: req.body.tutorial,
			StDescription: req.body.description,
		};

		try {
			let sql = "Update Stages set ? where StID=?";
			let query = await conn.query(sql, [data, req.params.id], (err, results) => {
				if (err) throw err;
				res.send(results);
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	}
);

//@route DELETE api/questions/:stageid
//@desc Delete Stage and It will delete all the questions present in that stage
//@access Public
router.delete("/:stid", async (req, res) => {
	conn.query("Delete FROM `questions` WHERE StID = ?", req.params.stid, (err, results) => {
		conn.query("Delete from Stages where StId = ?", [req.params.stid], (err, results) => {
			res.send(results);
		});
	});
});

module.exports = router;
