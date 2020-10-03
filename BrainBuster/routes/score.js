const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const mysql = require("mysql");
const conn = require("../config/db");

router.get("/", async (req, res, next) => {
	let sql = "SELECT * FROM score";
	let query = await conn.query(sql, (err, results) => {
		res.send(results);
	});
});

router.get("/leaderboard/:courseid", async (req, res, next) => {
	let sql = "select StdID, NickName, TotalScore from scoresofstudents where courseid=? order by totalscore desc";
	conn.query(sql, [req.params.courseid], (err, results) => {
		res.send(results);
	});
});

router.get("/:stdid", async (req, res, next) => {
	let sql = "SELECT * FROM score WHERE StdID=" + req.params.stdid;
	let query = conn.query(sql, (err, results) => {
		res.send(results);
	});
});

router.post("/score", async (req, res, next) => {
	let data = {
		StdID: req.query.StdID,
		StID: req.query.StID,
		Score: req.query.Score,
	};
	conn.query("SELECT COUNT(*) as isExist FROM score WHERE StdID = ?", [data.StdID], (err, result) => {
		if (err) throw err;

		if (result[0].isExist === 1) {
			conn.query("UPDATE score SET Score=? where StdID=?", [data.Score, data.StdID], (err, results) => {
				if (err) throw err;
				res.send(results);
			});
		} else if (result[0].isExist === 0) {
			conn.query("INSERT INTO score SET ?", data, (err, results) => {
				if (err) throw err;
				res.send(results);
			});
		}
	});
});

//@route PUT api/scores/:stdid/:stid
//@desc Update score of a student in a particular stage
//@access Public
router.put(
	"/:stdid/:stid",

	async (req, res) => {
		let data = req.query;

		try {
			let sql = "UPDATE score set ? WHERE StdId = ? and StId = ?";
			let query = await conn.query(sql, [data, req.params.stdid, req.params.stid], (err, results) => {
				if (err) throw err;
				res.send(results);
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	}
);

module.exports = router;
