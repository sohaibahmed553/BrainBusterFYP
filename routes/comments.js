const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const conn = require("../config/db");

//@route Put api/comments/:courseid
//@desc get all the comments of a course
//@access Public
router.get("/:courseid", async (req, res) => {
  let sql =
    "SELECT CommentID,NickName,Comment,InstructorID,StdID FROM Comments where CourseID = ? order by CommentID desc";
  let query = await conn.query(sql, [req.params.courseid], (err, results) => {
    res.send(results);
  });
});

//@route Get api/comments/replies/:commentid
//@desc get all the replies of a comment
//@access Public
router.get("/replies/:commentid", async (req, res) => {
  let sql =
    "SELECT ReplyID,Reply,NickName,InstructorID,StdID FROM Replies where CommentID = ?";
  let query = await conn.query(sql, [req.params.commentid], (err, results) => {
    res.send(results);
  });
});

//@route Get api/comments/replycount/:commentid
//@desc get reply count of a comment
//@access Public
router.get("/replycount/:commentid", async (req, res) => {
  let sql =
    "select count(ReplyID) as replycount from Replies where commentid = ?";
  let query = await conn.query(sql, [req.params.commentid], (err, results) => {
    res.send(results[0]);
  });
});

//@route Post api/comments
//@desc insert a new comment
//@access Public
router.post("/", async (req, res) => {
  let data = req.body;

  try {
    let sql = "Insert into Comments set ?";

    await conn.query(sql, data, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route Post api/comments/reply
//@desc insert a new reply
//@access Public
router.post("/reply", async (req, res) => {
  let data = req.body;

  try {
    let sql = "Insert into Replies set ?";

    await conn.query(sql, data, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route PUT api/comments/:commentid
//@desc update Comment
//@access Public
router.put("/:commentid", async (req, res) => {
  data = req.body;
  conn.query(
    "Update Comments set ? WHERE commentid = ?",
    [data, req.params.commentid],
    (err, results) => {
      res.send(results);
    }
  );
});

//@route PUT api/comments/reply/:replyid
//@desc update Reply
//@access Public
router.put("/reply/:replyid", async (req, res) => {
  data = req.body;
  conn.query(
    "Update Replies set ? WHERE ReplyID = ?",
    [data, req.params.replyid],
    (err, results) => {
      res.send(results);
    }
  );
});

//@route DELETE api/comments/:commentid
//@desc Delete Comment
//@access Public
router.delete("/:commentid", async (req, res) => {
  conn.query(
    "Delete FROM `Replies` WHERE commentid = ?",
    req.params.commentid,
    (err, results) => {
      conn.query(
        "Delete FROM `Comments` WHERE commentid = ?",
        req.params.commentid,
        (err, results) => {
          res.send(results);
        }
      );
    }
  );
});

//@route DELETE api/comments/reply/:replyid
//@desc Delete Reply
//@access Public
router.delete("/reply/:replyid", async (req, res) => {
  conn.query(
    "Delete FROM `Replies` WHERE ReplyID = ?",
    req.params.replyid,
    (err, results) => {
      res.send(results);
    }
  );
});

module.exports = router;
