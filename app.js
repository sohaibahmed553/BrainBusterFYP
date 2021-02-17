var express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// var instructorRouter = require("./routes/instructor");
// var instructorCoursesRouter = require("./routes/instructorcourses");
// var adminRouter = require("./routes/admin");
// var studentRouter = require("./routes/students");
// var questionsRouter = require("./routes/questions");
// var challengesRouter = require("./routes/challenges");
// var scoresRouter = require("./routes/score");
// var stagesRouter = require("./routes/stages");
// var badgesRouter = require("./routes/badges");
// var linksRouter = require("./routes/links");
// var coursesRouter = require("./routes/courses");
// var assignedCoursesRouter = require("./routes/assignedCourses");
// var authRouter = require("./routes/auth");
// var adminAuthRouter = require("./routes/adminauth");
// var instructorAuthRouter = require("./routes/instructorauth");
// var uploadsRouter = require("./routes/uploads");
// var commentsRouter = require("./routes/comments");

var app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => res.send("Api Running"));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
