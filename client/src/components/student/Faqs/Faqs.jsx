import React from "react";

const Faqs = () => {
	return (
		<div className="p-md-5 p-3">
			<h1 className="text-center">FAQS</h1>

			<h5>How my score is calculated?</h5>
			<p>
				There are three levels in every stage (easy, medium, hard), every level consists of ten questions and
				every question carry 10 marks. You need to score at least 60, 70, 80 to pass easy, medium, hard levels
				respectively.
			</p>

			<br />

			<h5>What if I cannot score the minimum passing marks?</h5>
			<p>
				You can retake the quiz at any time. Furthermore, you can also watch video lectures to gain more grip on
				that topic and then retake the quiz.
			</p>

			<br />

			<h5>How can I get a new badge?</h5>
			<p>Badges are awarded on individual’s performance in quiz. The description of badges is as below:</p>
			<dl>
				<dt>1.Guru</dt>
				<dd>Complete all levels of a subject with 100% score.</dd>

				<dt>2.Intelligent</dt>
				<dd>Complete 10 MCQS in any hard level without any mistake</dd>

				<dt>3.Ten to the third</dt>
				<dd>Completed 1000 points</dd>

				<dt>4.Quiz master</dt>
				<dd>Completing any 10 quizzes</dd>

				<dt>5.Benjamin Franklin</dt>
				<dd>Earning maximum points in a subject among classmates</dd>

				<dt>6.Quick Learner</dt>
				<dd>Answered 4 questions wrong then, all 6 answers correct in any easy level</dd>

				<dt>7.Rapid Learner</dt>
				<dd>Answered 3 questions wrong then, all 7 answers correct in any Medium level</dd>

				<dt>8.Clever Learner</dt>
				<dd>Answered 2 questions wrong then, all 8 answers correct in any hard level</dd>

				<dt>9.Simple as ABC</dt>
				<dd>Completed all easy levels in a subject</dd>

				<dt>10.Intermediate </dt>
				<dd>Completed all medium levels in a subject</dd>

				<dt>11.Victory</dt>
				<dd>Completed all hard levels in a subject</dd>

				<dt>12.First Success</dt>
				<dd>Complete first quiz ever</dd>
			</dl>

			<br />

			<h5>Can I reattempt any quiz?</h5>
			<p>Yes, you can reattempt any quiz you want at any time.</p>

			<br />

			<h5>Do I need to complete previous quizzes to move to next quiz?</h5>
			<p>No, you can attempt any quiz of any desired level of any stage of the course.</p>

			<br />

			<h5>How can I prepare for any quiz?</h5>
			<p>
				Video lectures related to each topic will be provided, so you can watch them and prepare for you desired
				topic.
			</p>

			<br />

			<h5>Can I enroll in multiple courses?</h5>
			<p>Yes, you can enroll in multiple courses depending upon course offered at your university.</p>

			<br />

			<h5>How can I ask any question about quiz?</h5>
			<p>
				A discussion forum is provided where you can ask any query related to the quiz, instructors will respond
				as soon as possible.
			</p>

			<br />

			<h5>How can I know the reason behind the right answer?</h5>
			<p>
				We have provided a critical reasoning section with every question, if you want to know that what is the
				main reason behind the right answer you can simply read the reasoning paragraph.
			</p>

			<br />

			<h5>Can my teacher see my score?</h5>
			<p>Yes, your assigned instructor to the course can see your performance in the entire subject.</p>

			<br />

			<h5>Can I see score of my friend?</h5>
			<p>
				Yes, for this purpose we have provided a leaderboard, from where you can simply view score of all the
				registered students in that course.
			</p>
		</div>
	);
};

export default Faqs;
