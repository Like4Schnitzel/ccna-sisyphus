import { questions } from "$lib/components";
import type { QuestionDTO } from "$lib/types";
import db from ".";

/**
 * Gets all chosen answers of a user for a specific question
 * @param userId what user the answers belong to
 * @param questionId what question is asked for
 * @returns all answer indexes to that question
 */
const getChosenAnswersForQuestion = (userId: string, questionId: number) => {
	const answers = db.prepare("SELECT answerId as answerIndex FROM answer_choices WHERE userId = ? AND questionId = ?")
		.all(userId, questionId) as { answerIndex: number }[];
	
	return answers.map(a => a.answerIndex);
}

const wasAnswerToQuestionCorrect = (userId: string, questionId: number) => {
	const wasCorrect = db.prepare("SELECT isCorrect FROM answers WHERE userId = ? AND questionId = ?")
		.get(userId, questionId) as { isCorrect: boolean };
	
	return !!wasCorrect?.isCorrect;
}

/**
 * Puts all chosen answers of a user for a specific question into the db
 * and removes the old answers
 * @param userId what user the answers belong to
 * @param questionId what question these answers are for
 * @param answerIndices the answer indices 
 */
const putChosenChoicesForQuestions = (userId: string, questionId: number, answerIndices: number[]) => {
	// we would firstly have to delete the old answers to the question and insert the new ones
	db.transaction(() => {
		db.prepare("DELETE FROM answer_choices WHERE userId = ? AND questionId = ?").run(userId, questionId);
		for (const index of answerIndices) {
			db.prepare("INSERT INTO answer_choices(userId, questionId, answerId) VALUES (?, ?, ?)")
				.run(userId, questionId, index);
		}
	})();
}

/**
 * Inserts a answer for a question into the database
 * @param userId the user the answer belongs to
 * @param questionId the question the answer belongs to
 * @param choices indices of choices that were picked
 * @returns if the answer was correct or not
 */
const putAnswerForQuestion = (userId: string, questionId: number, choices: number[]): boolean => {
	const question = questions.find(q => q.id == questionId);
	if (!question) {
		throw new Error("Couldn't find question with id " + questionId);
	}

	putChosenChoicesForQuestions(userId, questionId, choices);

	const isCorrect = validateQuestionCorrect(question, choices);
	

	db.prepare("INSERT INTO answers (questionId, userId, isCorrect) VALUES (?, ?, ?) ON CONFLICT DO UPDATE SET isCorrect = excluded.isCorrect")
		.run([questionId, userId, isCorrect ? 1 : 0]);
	
	return isCorrect;
}

// todo(f): this should probably not be right here
const validateQuestionCorrect = (question: QuestionDTO, choices: number[]): boolean => {
	switch (question.type) {
		case "match": {
			return question.movableOptions
				.every((option, index) => option.correctMatch == question.staticOptions[choices[index]]);
		}

		case "mcq": {
			for (let i = 0; i < question.answers.length; i++) {
				const answer = question.answers[i];
				if (!answer.correct && choices.includes(i)) {
					return false;
				} else if (answer.correct && !choices.includes(i)) {
					return false;
				}
			};

			return true;
		}

		default: {
			throw new Error("Unimplemented validation for " + question);
		}
	}
}

/**
 * Gets all answers of all questions for a specific user
 * @param userId the user in question
 * 
 * todo(f): think of a better way to return this
 * @returns object with key being questionId and the value being answerIdx
 */
const getAllAnswersForAllQuestions = (userId: string) => {
	const answersResult = db.prepare("SELECT questionId, answerId FROM answer_choices WHERE userId = ?")
		.all(userId) as { questionId: number, answerId: number }[];
	
	// map data a bit better imo
	// might be a bit slow with a lot of answers
	// but that will surely never happen
	const answers: Record<number, number[]> = {};

	for (const result of answersResult) {
		answers[result.questionId] ??= [];
		answers[result.questionId].push(result.answerId);
	}

	return answers;
}

export { getChosenAnswersForQuestion, getAllAnswersForAllQuestions, putAnswerForQuestion, wasAnswerToQuestionCorrect };