import { getChosenAnswersForQuestion, putAnswerForQuestion, wasAnswerToQuestionCorrect } from "$lib/server/db/answers";
import { json } from "@sveltejs/kit";
import { type } from "arktype";
import type { RequestHandler } from "./$types";
import { needAuth, withValidatedInput } from "$lib/server/apiHelper";

export const GET: RequestHandler = needAuth(async ({ locals, params }) => {
	return json({
		correct: wasAnswerToQuestionCorrect(locals.userData!.uuid, parseInt(params.questionId!)),
		choices: getChosenAnswersForQuestion(locals.userData!.uuid, parseInt(params.questionId!))
	});
});

const validateQuestionsPayload = type("number[]");
export const PUT: RequestHandler = needAuth(withValidatedInput(validateQuestionsPayload, async ({ locals, params }, data) => {
	const wasCorrect = putAnswerForQuestion(locals.userData!.uuid, parseInt(params.questionId!), data);

	return json({
		correct: wasCorrect,
		choices: data
	});
}));