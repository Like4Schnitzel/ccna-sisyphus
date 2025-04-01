import { getChosenAnswersForQuestion, validateQuestionForFrontend, putAnswerForQuestion, validateQuestionCorrect, wasAnswerToQuestionCorrect } from "$lib/server/db/answers";
import { json } from "@sveltejs/kit";
import { type } from "arktype";
import type { RequestHandler } from "./$types";
import { needAuth, withValidatedInput } from "$lib/server/apiHelper";
import { questions } from "$lib/components";
import type { Question } from "$lib/types";

export const GET: RequestHandler = needAuth(async ({ locals, params }) => {
	const questionId = parseFloat(params.questionId!);

	return json({
		correct: wasAnswerToQuestionCorrect(locals.userData!.uuid, questionId),
		choices: getChosenAnswersForQuestion(locals.userData!.uuid, questionId)
	});
});

const validateQuestionsPayload = type({
	"type": "'match' | 'mcq' | null",

	// match
	"staticOptions?": type({
		// "text": "string",
		"matchedTo": "string | null"
	}, "[]"),

	// mcq
	"answers?": type({
		// "text": "string",
		"selected": "boolean"
	}, "[]")
});


export const PUT: RequestHandler = withValidatedInput(validateQuestionsPayload, async ({ locals, params }, data) => {
	const questionId = parseFloat(params.questionId!);

	// todo(f): figure out how to validate this in arktype directly
	if ((data.type == "match" && data.staticOptions == null)
		|| (data.type == "mcq" && data.answers == null)) {
		return json({
			"error": "Invalid request"
		}, { status: 400 });
	}

	const questionFromRequest = data as Partial<Question>;
	const question = questions.find(q => q.id == questionId);
	if (!question) {
		return json({
			"error": "Question could not be found"
		}, { status: 400 });
	}

	if (locals.userData) {
		putAnswerForQuestion(locals.userData!.uuid, questionId, questionFromRequest);
	}

	return json({
		correct: validateQuestionCorrect(question, questionFromRequest),
		question: validateQuestionForFrontend(question, questionFromRequest)
	});
});