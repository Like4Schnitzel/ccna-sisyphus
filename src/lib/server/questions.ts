import type { QuestionDTO } from "$lib/types";

const removeAnswersFromQuestion = (question: QuestionDTO) => {
	// deep clone question so we can set correct answer to undefined
	// without affecting the original one
	const clonedQuestion = structuredClone(question);
	switch (clonedQuestion.type) {
		case "mcq": {
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
