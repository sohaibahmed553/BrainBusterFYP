var express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

var instructorRouter = require("./routes/instructor");
var instructorCoursesRouter = require("./routes/instructorcourses");
var adminRouter = require("./routes/admin");
var studentRouter = require("./routes/students");
var questionsRouter = require("./routes/questions");
var challengesRouter = require("./routes/challenges");
var scoresRouter = require("./routes/score");
var stagesRouter = require("./routes/stages");
var badgesRouter = require("./routes/badges");
var linksRouter = require("./routes/links");
var coursesRouter = require("./routes/courses");
var assignedCoursesRouter = require("./routes/assignedCourses");
var authRouter = require("./routes/auth");
var adminAuthRouter = require("./routes/adminauth");
var instructorAuthRouter = require("./routes/instructorauth");
var uploadsRouter = require("./routes/uploads");
var commentsRouter = require("./routes/comments");

var app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => res.send("Api Running"));

//Public Folder
app.use("/public", express.static("./public"));

app.use("/api/students", studentRouter);
app.use("/api/instructors", instructorRouter);
app.use("/api/instructorcourses", instructorCoursesRouter);
app.use("/api/admins", adminRouter);
app.use("/api/questions", questionsRouter);
app.use("/api/challenges", challengesRouter);
app.use("/api/scores", scoresRouter);
app.use("/api/stages", stagesRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/assignedcourses", assignedCoursesRouter);
app.use("/api/auth", authRouter);
app.use("/api/adminauth", adminAuthRouter);
app.use("/api/instructorauth", instructorAuthRouter);
app.use("/api/badges", badgesRouter);
app.use("/api/links", linksRouter);
app.use("/api/uploads", uploadsRouter);
app.use("/api/comments", commentsRouter);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

// const conn = require("./config/db");
