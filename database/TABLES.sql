CREATE DATABASE brainbuster;

use brainbuster;

CREATE TABLE Students (
    StdID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Gender VARCHAR(1) NOT NULL,
    Email VARCHAR(50) NOT NULL,
	UserName VARCHAR(30) NOT NULL UNIQUE,
	NickName VARCHAR(30) NOT NULL,
    Pass VARCHAR(60) NOT NULL,
	RegDate DATE NOT NULL,
    Avatar TEXT
);
ALTER TABLE Students AUTO_INCREMENT=1;

CREATE TABLE Admins (
    AdminID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Gender VARCHAR(1) NOT NULL,
    Email VARCHAR(50) NOT NULL,
	UserName VARCHAR(30) NOT NULL UNIQUE,
	NickName VARCHAR(30) NOT NULL,
    Pass VARCHAR(60) NOT NULL,
	RegDate DATE NOT NULL,
	Avatar Text
);
ALTER TABLE Admins AUTO_INCREMENT=1;


CREATE TABLE Instructors (
    InstructorID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Gender VARCHAR(1) NOT NULL,
    Email VARCHAR(50) NOT NULL,
	UserName VARCHAR(30) NOT NULL UNIQUE,
	NickName VARCHAR(30) NOT NULL,
    Pass VARCHAR(60) Not Null,
    RegDate DATE NOT NULL,
    Avatar Text
);
ALTER TABLE Instructors AUTO_INCREMENT=1;

#more than one students can be assigned more than one courses
create table AssignedCourses(
    CourseID INT NOT NULL,
    StdID INT NOT NULL,
    
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID),
	FOREIGN KEY (StdID) REFERENCES Students(StdID),

	PRIMARY KEY (CourseID, StdID)
);


CREATE TABLE Badges(
	BID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	BName VARCHAR(255) NOT NULL,
	BDetail TEXT NOT NULL,
	BAvatar TEXT
);
ALTER TABLE Badges AUTO_INCREMENT=1;


CREATE TABLE Courses (
    CourseID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    CourseName TEXT NOT NULL,
	Code VARCHAR(7) NOT NULL UNIQUE,
    Status INT NOT NULL DEFAULT 0,
    CourseDescription TEXT NOT NULL,
    CAvatar TEXT NOT NULL,
    InstructorID INT NOT NULL,
    
    FOREIGN KEY (InstructorID) REFERENCES Instructors(InstructorID)
);
ALTER TABLE Courses AUTO_INCREMENT=1;


#Skip these alter commands
ALTER TABLE Courses MODIFY COLUMN CourseName text;
alter table courses add column Status int;
alter table courses add column InstructorID int;
alter table courses add column CourseAvatar text not null;
ALTER TABLE courses
ADD FOREIGN KEY (InstructorID) REFERENCES Instructors(InstructorID);
alter table courses add column CourseDescription text not null;




/*
CREATE TABLE Links(
LinkID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
Link TEXT NOT NULL,
StID INT NOT NULL,
FOREIGN KEY (StID) REFERENCES Stages(StID)
);
ALTER TABLE Links AUTO_INCREMENT=1;
*/
drop table links;

CREATE TABLE Questions (
	
    QID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Questions TEXT NOT NULL,
    A TEXT NOT NULL,
    B TEXT NOT NULL,
	C TEXT NOT NULL,
    D TEXT NOT NULL,
    Answer varchar(1) NOT NULL,
    Explanation TEXT NOT NULL,
    Difficulty INT NOT NULL,
	StID INT NOT NULL,
	
    FOREIGN KEY (StID) REFERENCES Stages(StID)
);
ALTER TABLE Questions AUTO_INCREMENT=1;

/*
CREATE TABLE Challenges (
	
    QID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Questions TEXT NOT NULL,
    A TEXT NOT NULL,
    B TEXT NOT NULL,
	C TEXT NOT NULL,
    D TEXT NOT NULL,
    Answer varchar(1) NOT NULL,
	StID INT NOT NULL,
	
    FOREIGN KEY (StID) REFERENCES Stages(StID)
);
ALTER TABLE Challenges AUTO_INCREMENT=1;
*/
drop table challenges;
/*
CREATE TABLE Score(
StdID INT NOT NULL,
StID INT NOT NULL,
Level INT NOT NULL,
Score INT NOT NULL,
FOREIGN KEY (StdID) REFERENCES Students(StdID),
FOREIGN KEY (StID) REFERENCES Stages(StID),

PRIMARY KEY (StdID, StID, Level)
);
*/

CREATE TABLE Score(
	StdID INT NOT NULL,
	StID INT NOT NULL,
	EasyScore INT DEFAULT 0,
	MediumScore INT DEFAULT 0,
	HardScore INT DEFAULT 0,
	
    FOREIGN KEY (StdID) REFERENCES Students(StdID),
	FOREIGN KEY (StID) REFERENCES Stages(StID),

	PRIMARY KEY (StdID, StID)
);

#ignore alter commands
ALTER TABLE Score ALTER EasyScore SET DEFAULT 0;
ALTER TABLE Score ALTER MediumScore SET DEFAULT 0;
ALTER TABLE Score ALTER HardScore SET DEFAULT 0;



CREATE TABLE Stages(
	StID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	StTitle VARCHAR(255) NOT NULL,
    StDescription TEXT NOT NULL,
	CourseID INT NOT NULL,
	Tutorial TEXT NOT NULL,
	
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
ALTER TABLE Stages AUTO_INCREMENT=1;


CREATE TABLE StudentBadges(
	StdID INT NOT NULL,
	BID INT NOT NULL,
	CourseID INT NOT NULL,
	
    FOREIGN KEY (StdID) REFERENCES Students(StdID),
	FOREIGN KEY (BID) REFERENCES Badges(BID),
	FOREIGN KEY (CourseId) REFERENCES Courses(CourseID),

PRIMARY KEY (StdID, BID, CourseID)
);

#ignore alter commands
alter table studentbadges add column CourseID INT;
ALTER TABLE studentbadges
ADD FOREIGN KEY (CourseID) REFERENCES courses(courseid);
alter table studentbadges modify CourseID INT not null;
alter table studentbadges add Primary Key(StdId, CourseID, BID);

CREATE TABLE COMMENTS(
CommentID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    CourseID INT NOT NULL,
	NickName VARCHAR(30) NOT NULL,
    Likes INT NOT NULL DEFAULT 0,
    InstructorID INT,
    StdID INT,
	Comment TEXT NOT NULL,
   
    FOREIGN KEY (CourseId) REFERENCES Courses(CourseID)
);
ALTER TABLE Comments AUTO_INCREMENT=1;


CREATE TABLE Replies(
	ReplyID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    CommentID INT NOT NULL,
    Reply TEXT NOT NULL,
    InstructorID INT,
    StdID INT,
    NickName VARCHAR(30) NOT NULL,
   
    FOREIGN KEY (CommentID) REFERENCES Comments(CommentID)
);
ALTER TABLE Replies AUTO_INCREMENT=1;

