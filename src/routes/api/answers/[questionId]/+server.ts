import { getChosenAnswersForQuestion, putAnswersForQuestions } from "$lib/server/db/answers";
import { json } from "@sveltejs/kit";
import { type } from "arktype";
import type { RequestHandler } from "./$types";
import { needAuth, withValidatedInput } from "$lib/server/apiHelper";

export const GET: RequestHandler = needAuth(async ({ locals, params }) => {
	return json(getChosenAnswersForQuestion(locals.userData!.uuid, parseInt(params.questionId!)));
});

const validateQuestionsPayload = type("number[]");
export const PUT: RequestHandler = needAuth(withValidatedInput(validateQuestionsPayload, async ({ locals, params }, data) => {
	// todo(f): add more validation of answer indices - like only allow
	// questions that are actually in the dataset & possible answer indices
	putAnswersForQuestions(locals.userData!.uuid, parseInt(params.questionId!), data);
	return json(data);
}));