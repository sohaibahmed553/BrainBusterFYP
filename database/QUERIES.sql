
#####	SELECT QUERIES

#get 10 questions randomly by using stageid and difficulty
SELECT * FROM questions where stid='1' and Difficulty='1' order BY RAND();

#quiz page
select StTitle, CourseName from stages, courses where stages.courseid= courses.courseid and StID=1;

#dashboard queries
select badges.BID, BName, BAvatar from studentbadges, badges where badges.BID = studentbadges.BID and StdID = 9 and CourseID = 1;

select Students.StdID, NickName, TotalScore from Students,(select StdID, sum(score) as TotalScore from Score,Stages where Score.StID = Stages.StID and CourseId = 1 group by StdID) B where students.StdID = B.StdID;

#stages page
select * from stages,score where score.StID = stages.StID and StdID=9;

#courses page
select CourseID, CourseName, CourseAvatar, CourseDescription, instructors.InstructorID, NickName from courses,instructors where courses.InstructorID = instructors.InstructorID and Status=1;

#stages and score in each level
select stages.StID, StTitle, EasyScore, MediumScore, HardScore from stages, score where score.stid = stages.stid and StdID=9 and CourseID=1;
select * from stages, score where score.stid = stages.stid and StdID=9 and CourseID=1;

#get all courses registered by a student when passing student id
select courses.CourseID,CourseName from assignedcourses, courses where assignedcourses.CourseID = courses.CourseID and StdID=9;

#Easy Score
select * from score;

#Adding all the score to default value when the student is registered
insert into score(StdID,StID)
select StdID,StID from Stages,assignedcourses where stages.courseID = assignedcourses.CourseID and stages.CourseID = 1 and assignedcourses.StdID=13;

#add student in assignedcourses when student is registered
insert into assignedcourses
set CourseId = 2 ,StdID = 9;

#pass courseid and get all the data of courses, instructor name and all the stages of that course
Select CourseName,CourseAvatar,CourseDescription,Code,NickName from Courses,instructors where Courses.InstructorId = Instructors.InstructorID and CourseId = 1;
Select StID, StTitle, Tutorial from stages where CourseID = 2;

#getting count of questions in every stage and every difficulty
select stages.StID,Difficulty,count(questions) as QuestionCount from stages,questions where stages.StID = questions.StID and CourseID = 1 group by Difficulty, stages.StId