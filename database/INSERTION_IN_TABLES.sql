insert into admins(Gender,Email,UserName,NickName,Pass,RegDate)
values
('M','sohaibahmad@gmail.com','sohaib123','Sohaib','sohaib123','2020-02-24');

insert into Courses(CourseName, Status, InstructorID,CourseDescription,CAvatar,Code)
values
('OOP',1,1,"This course provides in-depth coverage of object-oriented programming principles and techniques using Java. Topics include classes, overloading, data abstraction, information hiding, encapsulation, inheritance, polymorphism, file processing, templates, exceptions, container classes, and lowlevel language features. The course briefly covers the mapping of UML design to Java implementation and object-oriented considerations for software design and reuse. The course also relates Java to GUI, databases, and real-time programming. The course material embraces the Java11 language standard with numerous examples demonstrating the benefits of Java8. Prerequisite(s): Knowledge of Java or Java.","public/courses/CS00001.png","CS00001"),
('Database',1,1,"This overview course focuses on the uses of relational and object-oriented databases for storing and managing information. Topics covered include computer database terminology and the evolution of the modern database. Database management systems (DBMS) such as Oracle, MySQL, Microsoft SQL Server, and Microsoft Access are introduced along with query languages. Hands-on instruction includes the creation of simple databases, inputting data, and developing basic queries.","public/courses/CS00002.png","CS00002"),
('Computer Fundamentals',1,1,"The purpose of this course is to provide an overview of computer operating systems. Topics to be discussed include a brief history of OS’s and their design and development. The course will cover major components the and the algorithms and implementation techniques used to create them. The class will presented using a both a mix of theory and hands-on exercises. Some/most of the programming assignments will be done on Linux machines using C.","public/courses/CS00003.jpg","CS00003");


insert into Stages(StTitle,StDescription, CourseID, Tutorial)
values
('OOP CONCEPTS AND FEATURES','These features includes Abstraction, encapsulation, inheritance and polymorphism. OOPS is about developing an application around its data, i.e. objects which provides the access to their properties and the possible operations in their own way.','1','https://www.youtube.com/watch?v=-HafzawNlUo'),
('CONSTRUCTORS AND DESTRUCTORS','Constructors are special class functions which performs initialization of every object. The Compiler calls the Constructor whenever an object is created. Constructors initialize values to object members after storage is allocated to the object. Whereas, Destructor on the other hand is used to destroy the class object.','1','https://www.youtube.com/watch?v=hAA8FBq2bA4'),
('ACCESS SPECIFIERS','Access modifiers (or access specifiers) are keywords in object-oriented languages that set the accessibility of classes, methods, and other members. Access modifiers are a specific part of programming language syntax used to facilitate the encapsulation of components.','1','https://www.youtube.com/watch?v=1KVQVXphqJU'),
('CLASS MEMBERS AND TYPES','In object-oriented programming, a class is a blueprint for creating objects (a particular data structure), providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods). The user-defined objects are created using the class keyword.','1','https://www.youtube.com/watch?v=unZ3YYvyuEA'),
('OBJECTS','An object, in object-oriented programming (OOP), is an abstract data type created by a developer. It can include multiple properties and methods and may even contain other objects. ... The object might defined as class userAccount and contain attributes such as: first name. last name.','1','https://www.youtube.com/watch?v=unZ3YYvyuEA'),
('INHERITANCE AND ITS TYPES','Understanding Inheritance and Different Types of Inheritance. Inheritance is a mechanism of acquiring the features and behaviors of a class by another class. The class whose members are inherited is called the base class, and the class that inherits those members is called the derived class.','1','https://www.youtube.com/watch?v=rr7HVs4d1Qo'),
('EXCEPTIONAL HANDELING AND STATIC CLASS MEMBERS','In Object-Oriented Programming (OOP), exceptions are a powerful mechanism for centralized processing of errors and exceptional situations. This mechanism replaces the procedure-oriented method of error handling in which each function returns a code indicating an error or a successful execution.','1','https://www.youtube.com/watch?v=n-q8QdtYhcc'),
('ASSIGNING OBJECT, POINTER TO OBJECTS, PASSING AND RETURNING OBJECT','Just like Other Pointers, the object pointers are declared by placing in front of a object pointers name. The Syntax is: class_name * Object_pointer_name; In above Syntax, class_Name is the name of an already defined class and object_pointer_name is the pointer to an object of this class type.','1','https://www.youtube.com/watch?v=w35ObkSRq48'),
('DEFAULT ARGUMENT VS OVERLOADING, UPCASTING AND DOWNCASTING','Upcasting (Generalization or Widening) is casting to a parent type in simple words casting individual type to one common type is called upcasting while downcasting (specialization or narrowing) is casting to a child type or casting common type to individual type.','1','https://www.youtube.com/watch?v=Qwkzpa08OwQ'),
('INBUILT CLASSES','The classes that are already provided in a programming language for use are inbuilt classes. These classes provide some functions or objects that can be used by the programmer for easier code.','1','https://www.youtube.com/watch?v=2Z0DEWcToM4');

insert into Stages(StTitle,StDescription, CourseID, Tutorial)
values
('The Rational Model','The relational model for database management is an approach to managing data using a structure and language consistent with first-order predicate logic, first described in 1969 by English computer scientist Edgar F. Codd, where all data is represented in terms of tuples, grouped into relations.','2','https://www.youtube.com/watch?v=XXGgYiXo8dI'),
('SQL Queries, Constraints and Triggers','Queries are simply questions against a set of data. ... A database query is a request for data from a database. Usually the request is to retrieve data; however, data can also be manipulated using queries. The data can come from one or more tables, or even other queries.','2','https://www.youtube.com/watch?v=PcMr6xoundk'),
('Relational Algebra','Relational database systems are expected to be equipped with a query language that can assist its users to query the database instances.','2','https://www.youtube.com/watch?v=AepLj_C4ywM'),
('Database Systems Design and Implementation','Database design is the organization of data according to a database model. The designer determines what data must be stored and how the data elements interrelate. ... Database design involves classifying data and identifying interrelationships. This theoretical representation of the data is called an ontology.','2','https://www.youtube.com/watch?v=I_rxqSJAj6U'),
('Normalization','Database Normalization is a technique of organizing the data in the database. Normalization is a systematic approach of decomposing tables to eliminate data redundancy(repetition) and undesirable characteristics like Insertion, Update and Deletion Anomalies.','2','https://www.youtube.com/watch?v=ABwD8IYByfk'),
('Programming Techniques','Software that is used to manage data and information structured as fields, records and files. A database program is the heart of a business information system and provides file creation, data entry, update, query and reporting functions.','2','https://www.youtube.com/watch?v=V5DyvUfsboA'),
('Storage and File Structures','DBMS - File Structure. ... A file is a sequence of records stored in binary format. A disk drive is formatted into several blocks that can store records.','2','https://www.youtube.com/watch?v=9kU1SPORaoI'),
('Indexing and Hashing','In DBMS, hashing is a technique to directly search the location of desired data on the disk without using index structure. ... In order Indexing addresses in the memory are sorted according to a critical value while in hashing addresses are always generated using a hash function on the key value.','2','https://www.youtube.com/watch?v=E--yzX05_k8'),
('Query Processing Techniques',' Query processing denotes the compilation and execution of a query specification usually expressed in a declarative database query language such as the structured query language (SQL). Query processing consists of a compile-time phase and a runtime phase.','2','https://www.youtube.com/watch?v=GPz7RgBNEYE'),
('Transactions','A database transaction (DB transaction) is a unit of work that is either completed as a unit or undone as a unit. Proper database transaction processing is critical to maintaining the integrity of your databases. Suppose you are entering new customer records into your database and are entering the 99th customer record','2','https://www.youtube.com/watch?v=HAAhn--tZV8'),
('Concurrency Control','Concurrency control is a database management systems (DBMS) concept that is used to address occur with a multi-user system. Concurrency control, when applied to a DBMS, is meant to coordinate simultaneous transactions while preserving data integrity.','2','https://www.youtube.com/watch?v=a6KIAX5Aubg'),
('Recovery System','The techniques used to recover the lost data due to system crash, transaction errors, viruses, catastrophic failure, incorrect commands execution etc. are database recovery techniques. So to prevent data loss recovery techniques based on deferred update and immediate update or backing up data can be used.','2','https://www.youtube.com/watch?v=HnVo3_iH76w');

insert into Stages(StTitle,StDescription, CourseID, Tutorial)
values
('Basic Computer Organisation','The computer system is a combination of many parts such as peripheral devices, secondary memory, CPU etc. This can be explained more clearly using a diagram. The salient points about the above figure displaying Computer System Organisation is − The I/O devices and the CPU both execute concurrently.','3','https://www.youtube.com/watch?v=063ipa6ZJzw'),
('Number Systems','Basics of Computers - Number System. The technique to represent and work with numbers is called number system. Decimal number system is the most common number system. Other popular number systems include binary number system, octal number system, hexadecimal number system, etc.','3','https://www.youtube.com/watch?v=L2zsmYaI5ww'),
('Computer Codes','The DOS operating system uses a superset of ASCII called extended ASCII or high ASCII. A more universal standard is the ISO Latin 1 set of characters, which is used by many operating systems, as well as Web browsers. Another set of codes that is used on large IBM computers is EBCDIC.','3','https://www.youtube.com/watch?v=H4l42nbYmrU'),
('Computer Arithmetic','Arithmetic and Logic Operations. The ALU is the core of the computer - it performs arithmetic and logic operations on data that not only realize the goals of various applications (e.g., scientific and engineering programs), but also manipulate addresses (e.g., pointer arithmetic).','3','https://www.youtube.com/watch?v=o-WXqnagg0c'),
('Boolean Algebra and Logic Circuits','Boolean Algebra is the mathematical foundation of digital circuits. Boolean Algebra specifies the relationship between Boolean variables which is used to design combinational logic circuits using Logic Gates. The truth table shows a logic circuits output response to all of the input combinations.','3','https://www.youtube.com/watch?v=RhS-AL2ZcyE'),
('Processor & Memory','Memory management is the functionality of an operating system which handles or manages primary memory and moves processes back and forth between main memory and disk during execution. Memory management keeps track of each and every memory location, regardless of either it is allocated to some process or it is free.','3','https://www.youtube.com/watch?v=IQWeOA_NUXs'),
('Secondary Storage Devices','Secondary storage devices are non-volatile devices where the data is stored for long-term storage. Disks are the mainly used secondary storage devices. They provide the bulk of secondary storage in operating systems today. The main activity that is performed in secondary storage management is disk scheduling.','3','https://www.youtube.com/watch?v=j2PCWwovkDA'),
('Input-Output Devices','One of the important jobs of an Operating System is to manage various I/O devices including mouse, keyboards, touch pad, disk drives, display adapters, USB devices, Bit-mapped screen, LED, Analog-to-digital converter, On/off switch, network connections, audio I/O, printers etc.','3','https://www.youtube.com/watch?v=bGZ4lVu9Grk'),
('Computer Software','Software, instructions that tell a computer what to do. Software comprises the entire set of programs, procedures, and routines associated with the operation of a computer system. ... A set of instructions that directs a computers hardware to perform a task is called a program, or software program.','3','https://www.youtube.com/watch?v=WJ-UaAaumNA'),
('Planning the Computer Program','There are five main ingredients in the programming process:
Defining the problem.
Planning the solution.
Coding the program.
Testing the program.
Documenting the program.','3','https://www.youtube.com/watch?v=z7tIZLDlgOA'),
('Computer Languages','Computer programs can range from two to millions of lines of instructions. Just as there are several languages in the human world, there are also several computer programming languages such as Python, C++, Java, C, Perl, PHP and Ruby. There are hundreds of different programming languages.','3','https://www.youtube.com/watch?v=rDyxMZEV4S4'),
('System Implementation and Operation','Systems implementation is the process of: defining how the information system should be built (i.e., physical system design), ensuring that the information system is operational and used, ensuring that the information system meets quality standard (i.e., quality assurance).','3','https://www.youtube.com/watch?v=VjPgYcQqqN0'),
('Application Software Packages & Business Data Processing','Application package software, or simply an application package, is a collection of software programs that have been developed for the purpose of being licensed to third-party organizations. ... Application software, within the context of this discussion, does not include all-purpose tools such as Excel, Quicken, or Word.','3','https://www.youtube.com/watch?v=e_FAFrNULvM'),
('Data Communications and Computer Networks','Data communications refers to the transmission of this digital data between two or more computers and a computer network or data network is a telecommunications network that allows computers to exchange data. ... The best-known computer network is the Internet.','3','https://www.youtube.com/watch?v=ULgKbLWhgEM'),
('Multimedia','A multimedia computer system is a computer system that can create, import, integrate, store, retrieve, edit, and delete two or more types of media materials in digital form, such as audio, image, full-motion video, and text information.','3','https://www.youtube.com/watch?v=Syeu_l3sAJE'),
('Information Technology','IT Fundamentals introduces computer hardware, computer software, databases, networking, security, and software development. This course comprises 15 lessons covering IT fundamentals. Each lesson includes a combination of Wikipedia readings, YouTube videos, and hands-on learning activities.','3','https://www.youtube.com/watch?v=Qy064xFEW64');

insert into Badges (BName, BDetail, BAvatar)
values
('Guru', 'Complete all levels of a subject with 100% score', 'Guru.png'),
('Intelligent', 'Complete 10 MCQS in any hard level without any mistake', 'Intelligent.png'),
('Ten To the Third', 'Completed 1000 points', 'TenToTheThird.png'),
('Quiz Master', 'Completing any 10 quizes', 'QuizMaster.png'),
('Branjamin Franklin', 'Earning maximum points in a subject among classmates', 'BranjaminFranklin.png'),
('Quick Learner', 'Answered 4 questions wrong then, all 6 answers correct in any easy level', 'QuickLearner.png'),
('Rapid Learner', 'Answered 3 questions wrong then, all 7 answers correct in any Medium  level', 'RapidLearner.png'),
('Clever Learner', 'Answered 2 questions wrong then, all 8 answers correct in any hard level', 'CleverLearner.png'),
('Simple As ABC', 'Completed all easy levels in a subject', 'SimpleAsABC.png'),
('Intermediate', 'Completed all medium levels in a subject', 'Intermediate.png'),
('Victory', 'Completed all hard levels in a subject', 'Victory.png'),
('First Success', 'Complete first quiz ever.', 'FirstSuccess.png');

select * from links;
insert into Links (Link, StID)
values
('asdasd','1');

insert into StudentBadges
values
('9','6','1'),
('9','9','1'),
('9','7','1'),
('10','6','1'),
('10','9','1');


insert into assignedcourses
values
(1,9),
(1,10),
(1,11),
(1,12),
(1,13);

insert into Comments(CourseID,NickName,Comment)
values
(1,"Sohaib","Hi, My Name is Sohaib."),
(1,"Ali Ahmad","Hi, My Name is Ali Ahmad. I am currenty enrolled in the course of OOP from the BrainBuster quiz application. My experience is very good so far and I will recommend this application to every student."),
(2,"Sohaib","Hi, My Name is Sohaib."),
(2,"Ali Ahmad","Hi, My Name is Ali Ahmad. I am currenty enrolled in the course of Database from the BrainBuster quiz application. My experience is very good so far and I will recommend this application to every student.");

insert into Replies(CommentID,Reply,NickName)
values
(1,"Hi, I am Ali Ahmad. Welcome to the course","Ali Ahmad"),
(1,"Hi Sohaib, How are you doing?","sohaib"),
(3,"Hi, I am Ali Ahmad. Welcome to the course","Ali Ahmad"),
(3,"Hi Sohaib, How are you doing?","sohaib");

/*
insert into score
values
('9','1','1','10'),
('9','1','2','8'),
('9','1','3','9'),
('9','2','1','9'),
('9','2','3','9'),
('10','2','1','8'),
('11','5','1','10');
*/









