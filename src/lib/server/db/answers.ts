import { questions } from "$lib/components";
import type { Question, QuestionDTO } from "$lib/types";
import db from ".";

// todo(f): this could be nicer if MCQQuestionDTO was exported
type MCQAnswer = {
	text: string,
	selected: boolean
};

// also this
type MatchAnswer = {
	text: string,
	matchedTo: string
}

type APIAnswer = MCQAnswer | MatchAnswer;

/**
 * Gets all chosen answers of a user for a specific question
 * @param userId what user the answers belong to
 * @param questionId what question is asked for
 * @returns all answer indexes to that question
 */
const getChosenAnswersForQuestion = (userId: string, questionId: number): APIAnswer[] => {
	const question = questions.find(q => q.id === questionId);
	if (!question) {
		throw new Error("Question could not be found");
	}
	
	const answers = db.prepare("SELECT answerId as answerIndex FROM answer_choices WHERE userId = ? AND questionId = ?")
		.all(userId, questionId) as { answerIndex: number }[];
	
	if (question.type == "match") {
		return answers.map(({ answerIndex }, currentIndex) => ({
			text: question.staticOptions[currentIndex].text,
			matchedTo: question.movableOptions[answerIndex] ?? null
		}))
	} else if (question.type == "mcq") {
		return answers.map((_, currentIndex) => ({
			text: question.answers[currentIndex].text,
			selected: true
		}));
	} else {
		throw new Error("Unhandled question type " + question);
	}
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
const putChosenChoicesForQuestions = (userId: string, question: QuestionDTO, questionRequest: Partial<Question>) => {	
	// we would firstly have to delete the old answers to the question and insert the new ones
	db.transaction(() => {
		db.prepare("DELETE FROM answer_choices WHERE userId = ? AND questionId = ?").run(userId, question.id);
		
		const answerIndices: number[] = [];
		switch (questionRequest.type) {
			case "mcq": {
				if (!questionRequest.answers) break;
				for (let i = 0; i < questionRequest.answers.length; i++) {
					if (questionRequest.answers[i].selected) {
						answerIndices.push(i);
					}
				}
				console.log(answerIndices);
				break;
			}
			case "match": {
				if (!questionRequest.staticOptions || question.type !== "match") break;

				for (let i = 0; i < questionRequest.staticOptions.length; i++) {
					answerIndices.push(question.movableOptions.indexOf(questionRequest.staticOptions[i].matchedTo!));
				}
			}
		}

		for (const index of answerIndices) {
			db.prepare("INSERT INTO answer_choices(userId, questionId, answerId) VALUES (?, ?, ?)")
				.run(userId, question.id, index);
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
const putAnswerForQuestion = (userId: string, questionId: number, questionRequest: Partial<Question>): boolean => {
	const question = questions.find(q => q.id == questionId);
	if (!question) {
		throw new Error("Couldn't find question with id " + questionId);
	}

	if (question.type != questionRequest.type) {
		throw new Error("Type of question did not match");
	}

	putChosenChoicesForQuestions(userId, question, questionRequest);

	const isCorrect = validateQuestionCorrect(question, questionRequest);
	

	db.prepare("INSERT INTO answers (questionId, userId, isCorrect) VALUES (?, ?, ?) ON CONFLICT DO UPDATE SET isCorrect = excluded.isCorrect")
		.run([questionId, userId, isCorrect ? 1 : 0]);
	
	return isCorrect;
}

// todo(f): this should probably not be right here
const validateQuestionCorrect = (question: QuestionDTO, request: Partial<Question>): boolean => {
	if (question.type !== request.type) {
		throw new Error("Question type did not match");
	}

	switch (question.type) {
		case "mcq": {
			if (request.type !== "mcq" || request.answers == null) return false;

			for (let i = 0; i < question.answers.length; i++) {
				if (question.answers[i].correct && !request.answers[i]?.selected
					|| !question.answers[i].correct && request.answers[i]?.selected) {
					return false;
				}
			}
			return true;
		}

		case "match": {
			if (request.type !== "match" || request.staticOptions == null) return false;

			for (let i = 0; i < question.staticOptions.length; i++) {
				if (question.staticOptions[i].correctMatch != request.staticOptions[i]?.matchedTo) 
					return false;
			}

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

const getIncorrectAnswers = (userId: string) => {
	const incorrectAnswersResult = db.prepare("SELECT questionId, isCorrect FROM answers WHERE userId = ? AND isCorrect = false")
		.all(userId) as { questionId: string, isCorrect: boolean }[];

	return incorrectAnswersResult.map(row => row.questionId);
}

export { 
	getChosenAnswersForQuestion, 
	getAllAnswersForAllQuestions, 
	putAnswerForQuestion, 
	wasAnswerToQuestionCorrect, 
	validateQuestionCorrect, 
	getIncorrectAnswers 
};
