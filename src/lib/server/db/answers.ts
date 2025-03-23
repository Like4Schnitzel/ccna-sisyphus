import db from ".";

/**
 * Gets all chosen answers of a user for a specific question
 * @param userId what user the answers belong to
 * @param questionId what question is asked for
 * @returns all answer indexes to that question
 */
const getChosenAnswersForQuestion = (userId: string, questionId: number) => {
	const answers = db.prepare("SELECT answerId as answerIndex FROM answer_to_answers WHERE userId = ? AND questionId = ?")
		.all(userId, questionId) as { answerIndex: number }[];
	
	return answers.map(a => a.answerIndex);
}

/**
 * Puts all chosen answers of a user for a specific question into the db
 * and removes the old answers
 * @param userId what user the answers belong to
 * @param questionId what question these answers are for
 * @param answerIndices the answer indices 
 */
const putAnswersForQuestions = (userId: string, questionId: number, answerIndices: number[]) => {
	// we would firstly have to delete the old answers to the question and insert the new ones
	db.transaction(() => {
		db.prepare("DELETE FROM answer_to_answers WHERE userId = ? AND questionId = ?").run(userId, questionId);
		for (const index of answerIndices) {
			db.prepare("INSERT INTO answer_to_answers(userId, questionId, answerId) VALUES (?, ?, ?)")
				.run(userId, questionId, index);
		}
	})();
}

/**
 * Gets all answers of all questions for a specific user
 * @param userId the user in question
 * 
 * todo(f): think of a better way to return this
 * @returns object with key being questionId and the value being answerIdx
 */
const getAllAnswersForAllQuestions = (userId: string) => {
	const answersResult = db.prepare("SELECT questionId, answerId as answerIdx FROM answer_to_answers WHERE userId = ?")
		.all(userId) as { questionId: number, answerIdx: number }[];
	
	// map data a bit better imo
	// might be a bit slow with a lot of answers
	// but that will surely never happen
	const answers: Record<number, number[]> = {};

	for (const result of answersResult) {
		answers[result.questionId] ??= [];
		answers[result.questionId].push(result.answerIdx);
	}

	return answers;
}

export { getChosenAnswersForQuestion, putAnswersForQuestions, getAllAnswersForAllQuestions };