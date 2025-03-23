import db from ".";

/**
 * Gets all chosen answers of a user for a specific question
 * @param userId 
 * @param questionId what question is asked for
 * @returns all answer indexes to that question
 */
const getChosenAnswersForQuestion = (userId: string, questionId: number) => {
	const answers = db.prepare("SELECT answerId as answerIndex FROM answer_to_answers WHERE userId = ? AND questionId = ?")
		.all(userId, questionId) as { answerIndex: number }[];
	
	return answers.map(a => a.answerIndex);
}

const putAnswersForQuestions = (userId: string, questionId: number, answerIndices: number[]) => {
	// we would firstly have to delete the old answers to the question and insert the new ones
	db.transaction(() => {
		db.prepare("DELETE FROM answer_to_answers WHERE userId = ? AND questionId = ?").run(userId, questionId);
		for (let index of answerIndices) {
			db.prepare("INSERT INTO answer_to_answers(userId, questionId, answerId) VALUES (?, ?, ?)")
				.run(userId, questionId, index);
		}
	})();
}

export { getChosenAnswersForQuestion, putAnswersForQuestions };