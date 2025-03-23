import { getChosenAnswersForQuestion, putAnswerForQuestion, validateQuestionCorrect, wasAnswerToQuestionCorrect } from "$lib/server/db/answers";
import { json } from "@sveltejs/kit";
import { type } from "arktype";
import type { RequestHandler } from "./$types";
import { needAuth, withValidatedInput } from "$lib/server/apiHelper";
import { questions } from "$lib/components";

export const GET: RequestHandler = needAuth(async ({ locals, params }) => {
	return json({
		correct: wasAnswerToQuestionCorrect(locals.userData!.uuid, parseInt(params.questionId!)),
		choices: getChosenAnswersForQuestion(locals.userData!.uuid, parseInt(params.questionId!))
	});
});

const validateQuestionsPayload = type("number[]");
export const PUT: RequestHandler = withValidatedInput(validateQuestionsPayload, async ({ locals, params }, data) => {
	let wasCorrect = false;
	const questionId = parseInt(params.questionId!);

	// todo(f): this could be cleaner
	if (locals.userData) {
		// putAnswerForQuestion also inserts it into the db
		// this is why we dont call if we're not authenticated
		wasCorrect = putAnswerForQuestion(locals.userData!.uuid, parseInt(params.questionId!), data);
	} else {
		const question = questions.find(q => q.id == questionId);
		if (!question) {
			return json({
				"error": "Question could not be found"
			}, { status: 400 });
		}
		
		wasCorrect = validateQuestionCorrect(question, data);
	}
	
	return json({
		correct: wasCorrect,
		choices: data
	});
});