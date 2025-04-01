import type { QuestionDTO } from "$lib/types";

const removeAnswersFromQuestion = (question: QuestionDTO) => {
	// deep clone question so we can set correct answer to undefined
	// without affecting the original one
	const clonedQuestion = structuredClone(question);
	switch (clonedQuestion.type) {
		case "mcq": {
			clonedQuestion.hasMultipleCorrectAnswers = clonedQuestion.answers.filter(f => f.correct).length > 1;

			for (const answer of clonedQuestion.answers) {
				answer.correct = undefined;
			}
			break;
		}
		case "match": {
			for (const answer of clonedQuestion.staticOptions) {
				answer.correctMatch = null;
			}
			break;
		}
	}

	return clonedQuestion;
}

export { removeAnswersFromQuestion };
