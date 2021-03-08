const express = require("express");
const router = express.Router();
const conn = require("../config/db");
const { check, validationResult } = require("express-validator");

//@route Get api/badges/:stdid/:courseid/:stid/::difficulty/:score
//@desc get all badges
//@access Public
// newbadges/:stdid/:courseid/:stid/:difficulty/:score
router.post(
  "/newbadges/:stdid/:courseid/:stid/:difficulty/:score/:learnertype",
  async (req, res, next) => {
    let stdid = Number(req.params.stdid);
    let courseid = Number(req.params.courseid);
    let stid = Number(req.params.stid);
    let difficulty = Number(req.params.difficulty);
    let score = Number(req.params.score);
    let learnerType = req.params.learnertype; // quick (or) rapid (or) clever

    let earnedBadges = [];

    // 1.Guru
    conn.query("select * from StudentBadges", (err, results) => {
      if (
        results.filter(
          (x) => x.StdID === stdid && x.BID === 1 && x.CourseID === courseid
        ).length === 0
      ) {
        conn.query(
          `
				select count(easyscore) as easyCount from Stages, Score where Stages.stid = Score.stid and stdid=${stdid} and courseid=${courseid} and easyscore!=100;
				select count(mediumscore) as mediumCount from Stages, Score where Stages.stid = Score.stid and stdid=${stdid} and courseid=${courseid} and mediumscore!=100;
				select count(hardscore) as hardCount from Stages, Score where Stages.stid = Score.stid and stdid=${stdid} and courseid=${courseid} and hardscore!=100;
				`,
          (err, results) => {
            let countQuiz =
              results[0][0].easyCount +
              results[0][0].easyCount +
              results[0][0].easyCount;
            if (countQuiz === 0) {
              conn.query(
                `insert into StudentBadges values ( ${stdid}, 1, ${courseid} )`
              );
              earnedBadges.push({
                BName: "Guru",
                BAvatar: "Guru.png",
              });
            }
          }
        );
      }
    });

    // 2.Intelligent
    conn.query("select * from StudentBadges", (err, results) => {
      if (
        results.filter(
          (x) => x.StdID === stdid && x.BID === 2 && x.CourseID === courseid
        ).length === 0
      ) {
        conn.query("", () => {
          if (score === 100 && difficulty === 3) {
            conn.query(
              `insert into StudentBadges values ( ${stdid}, 2, ${courseid} )`
            );
            earnedBadges.push({
              BName: "Intelligent",
              BAvatar: "Intelligent.png",
            });
          }
        });
      }
    });

    // 3.Ten to the third
    conn.query("select * from StudentBadges", (err, results) => {
      if (
        results.filter(
          (x) => x.StdID === stdid && x.BID === 3 && x.CourseID === courseid
        ).length === 0
      ) {
        conn.query(
          `select TotalScore from ScoresOfStudents where courseid=${courseid} and stdid=${stdid}`,
          (err, results) => {
            if (results[0].TotalScore >= 1000) {
              conn.query(
                `insert into StudentBadges values ( ${stdid}, 3, ${courseid} )`
              );
              earnedBadges.push({
                BName: "Ten To the Third",
                BAvatar: "TenToTheThird.png",
              });
            }
          }
        );
      }
    });

    // 4.Quiz Master
    conn.query("select * from StudentBadges", (err, results) => {
      if (
        results.filter(
          (x) => x.StdID === stdid && x.BID === 4 && x.CourseID === courseid
        ).length === 0
      ) {
        conn.query(
          `
				select count(easyscore) as easyCount from Stages, Score where Stages.stid = Score.stid and stdid=${stdid} and courseid=${courseid} and easyscore>0;
				select count(mediumscore) as mediumCount from Stages, Score where Stages.stid = Score.stid and stdid=${stdid} and courseid=${courseid} and MediumScore>0;
				select count(hardscore) as hardCount from Stages, Score where Stages.stid = Score.stid and stdid=${stdid} and courseid=${courseid} and hardscore>0;
				`,
          (err, results) => {
            let countPassedQuizes =
              results[0][0].easyCount +
              results[0][0].easyCount +
              results[0][0].easyCount;
            if (countPassedQuizes >= 10) {
              conn.query(
                `insert into studentbadges values ( ${stdid}, 4, ${courseid} )`
              );
              earnedBadges.push({
                BName: "Quiz Master",
                BAvatar: "QuizMaster.png",
              });
            }
          }
        );
      }
    });

    // 5.Banjamin Franklin
    conn.query("select * from StudentBadges", (err, results) => {
      if (
        results.filter(
          (x) => x.StdID === stdid && x.BID === 5 && x.CourseID === courseid
        ).length === 0
      ) {
        conn.query(
          `select StdID from ScoresOfStudents where courseid=${courseid} order by totalscore desc limit 1`,
          (err, results) => {
            if (results[0].StdID === stdid) {
              conn.query(
                `insert into StudentBadges values ( ${stdid}, 5, ${courseid} )`
              );
              earnedBadges.push({
                BName: "Branjamin Franklin",
                BAvatar: "BranjaminFranklin.png",
              });
            }
          }
        );
      }
    });

    // 6.Quick Learner
    conn.query("select * from StudentBadges", (err, results) => {
      if (
        results.filter(
          (x) => x.StdID === stdid && x.BID === 6 && x.CourseID === courseid
        ).length === 0
      ) {
        conn.query("", () => {
          if (learnerType === "Quick" && difficulty === 1) {
            conn.query(
              `insert into StudentBadges values ( ${stdid}, 6, ${courseid} )`
            );
            earnedBadges.push({
              BName: "Quick Learner",
              BAvatar: "QuickLearner.png",
            });
          }
        });
      }
    });

    // 7.Rapid Learner
    conn.query("select * from StudentBadges", (err, results) => {
      if (
        results.filter(
          (x) => x.StdID === stdid && x.BID === 7 && x.CourseID === courseid
        ).length === 0
      ) {
        conn.query("", () => {
          if (learnerType === "Rapid" && difficulty === 2) {
            conn.query(
              `insert into StudentBadges values ( ${stdid}, 7, ${courseid} )`
            );
            earnedBadges.push({
              BName: "Rapid Learner",
              BAvatar: "RapidLearner.png",
            });
          }
        });
      }
    });

    // 8.Clever Learner
    conn.query("select * from StudentBadges", (err, results) => {
      if (
        results.filter(
          (x) => x.StdID === stdid && x.BID === 8 && x.CourseID === courseid
        ).length === 0
      ) {
        conn.query("", () => {
          if (learnerType === "Clever" && difficulty === 3) {
            conn.query(
              `insert into StudentBadges values ( ${stdid}, 8, ${courseid} )`
            );
            console.log("In the badges");
            earnedBadges.push({
              BName: "Clever Learner",
              BAvatar: "CleverLearner.png",
            });
          }
        });
      }
    });

    // 9.Simple as ABC
    conn.query("select * from StudentBadges", (err, results) => {
      if (
        results.filter(
          (x) => x.StdID === stdid && x.BID === 9 && x.CourseID === courseid
        ).length === 0
      ) {
        conn.query(
          `select count(easyscore) as easyCount from Stages, Score where Stages.stid = Score.stid and stdid=${stdid} and courseid=${courseid} and easyscore=0;`,
          (err, results) => {
            console.log("easy ", results[0].easyCount);
            if (results[0].easyCount === 0) {
              conn.query(
                `insert into StudentBadges values ( ${stdid}, 9, ${courseid} )`
              );
              earnedBadges.push({
                BName: "Simple As ABC",
                BAvatar: "SimpleAsABC.png",
              });
            }
          }
        );
      }
    });

    // 10.Intermediate
    conn.query("select * from StudentBadges", (err, results) => {
      if (
        results.filter(
          (x) => x.StdID === stdid && x.BID === 10 && x.CourseID === courseid
        ).length === 0
      ) {
        conn.query(
          `select count(mediumscore) as mediumCount from Stages, Score where Stages.stid = Score.stid and stdid=${stdid} and courseid=${courseid} and mediumscore=0;`,
          (err, results) => {
            console.log("medium ", results[0].mediumCount);
            if (results[0].mediumCount === 0) {
              conn.query(
                `insert into StudentBadges values ( ${stdid}, 10, ${courseid} )`
              );
              earnedBadges.push({
                BName: "Intermediate",
                BAvatar: "Intermediate.png",
              });
            }
          }
        );
      }
    });

    // 11.Victory
    conn.query("select * from StudentBadges", (err, results) => {
      if (
        results.filter(
          (x) => x.StdID === stdid && x.BID === 11 && x.CourseID === courseid
        ).length === 0
      ) {
        conn.query(
          `select count(hardscore) as hardCount from Stages, Score where Stages.stid = Score.stid and stdid=${stdid} and courseid=${courseid} and hardscore=0;`,
          (err, results) => {
            console.log("hard ", results[0].hardCount);
            if (results[0].hardCount === 0) {
              conn.query(
                `insert into StudentBadges values ( ${stdid}, 11, ${courseid} )`
              );
              earnedBadges.push({
                BName: "Victory",
                BAvatar: "Victory.png",
              });
            }
          }
        );
      }
    });

    // 12.First Success
    conn.query("select * from StudentBadges", (err, results) => {
      if (
        results.filter(
          (x) => x.StdID === stdid && x.BID === 12 && x.CourseID === courseid
        ).length === 0
      ) {
        conn.query("", () => {
          conn.query(
            `insert into StudentBadges values ( ${stdid}, 12, ${courseid} )`
          );
          earnedBadges.push({
            BName: "First Success",
            BAvatar: "FirstSuccess.png",
          });
        });
      }
    });

    // send Final Response
    conn.query("", () => {
      conn.query("", () => {
        res.send(earnedBadges);
      });
    });
  }
);

//@route Post api/badges
//@desc add new badge
//@access Public
router.post(
  "/",
  [
    check("BName", "Please enter badge name.").not().isEmpty(),
    check("BDetail", "Please enter badge detail.").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let data = {
      BName: req.body.BName,
      BDetail: req.body.BDetail,
    };

    try {
      let sql = "Insert into Badges set ?";
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

//@route Put api/badges/:id
//@desc update badge by passing id
//@access Public
router.put(
  "/:id",
  [
    check("BName", "Please enter badge name.").not().isEmpty(),
    check("BDetail", "Please enter badge detail.").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let data = {
      BName: req.body.BName,
      BDetail: req.body.BDetail,
    };

    try {
      let sql = "UPDATE Badges set ? WHERE BID = ?";
      let query = await conn.query(
        sql,
        [data, req.params.id],
        (err, results) => {
          if (err) throw err;
          res.send(results);
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//@route DELETE api/badges/:id
//@desc Delete Badge
//@access Public

router.delete("/:id", async (req, res) => {
  conn.query(
    "Delete FROM `Badges` WHERE BID = ?",
    req.params.id,
    (err, results) => {
      res.send(results);
    }
  );
});

module.exports = router;
