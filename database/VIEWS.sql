#####	VIEWS
#Create View Score of all Students
CREATE VIEW ScoresOfStudents as
SELECT Score.StdID,Stages.CourseID,UserName,NickName,sum(IFNULL(EasyScore, 0)+IFNULL(MediumScore, 0)+IFNULL(HardScore, 0)) as TotalScore from Score,Students,Stages where Score.StdID = Students.StdID and Score.StID = Stages.StID group by StdID,CourseID order by TotalScore;


#####	SELECT FROM VIEWS

#student with score greater than the student
SELECT * FROM scoresofstudents where TotalScore > (Select TotalScore from ScoresOfStudents where StdID = 13 and CourseID = 1) and CourseId = 1 order by TotalScore limit 1;

#student with score less than the student
SELECT * FROM scoresofstudents where TotalScore < (Select TotalScore from ScoresOfStudents where StdID = 13 and CourseID = 1) and CourseId = 1  order by TotalScore desc limit 1;

#Leader board of a Course
SELECT NickName,TotalScore from ScoresOfStudents where CourseId=1 order by TotalScore desc;

#Top scorers in specific course
SELECT NickName,TotalScore from ScoresOfStudents where CourseId=1 order by TotalScore desc limit 3;