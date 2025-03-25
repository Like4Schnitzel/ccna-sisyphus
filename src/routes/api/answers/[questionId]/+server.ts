import { getChosenAnswersForQuestion, putAnswerForQuestion, validateQuestionCorrect, wasAnswerToQuestionCorrect } from "$lib/server/db/answers";
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
	let wasCorrect = false;
	const questionId = parseFloat(params.questionId!);

	// todo(f): figure out how to validate this in arktype directly
	if ((data.type == "match" && data.staticOptions == null)
		|| (data.type == "mcq" && data.answers == null)) {
		return json({
			"error": "Invalid request"
		}, { status: 400 });
	}

	const questionFromRequest = data as Partial<Question>;

	// todo(f): this could be cleaner
	if (locals.userData) {
		// putAnswerForQuestion also inserts it into the db
		// this is why we dont call it if we're not authenticated
		wasCorrect = putAnswerForQuestion(locals.userData!.uuid, questionId, questionFromRequest);
	} else {
		const question = questions.find(q => q.id == questionId);
		if (!question) {
			return json({
				"error": "Question could not be found"
			}, { status: 400 });
		}
		
		wasCorrect = validateQuestionCorrect(question, questionFromRequest);
	}
	
	return json({
		correct: wasCorrect,
	});
});