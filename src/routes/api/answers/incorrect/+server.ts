import { needAuth } from "$lib/server/apiHelper";
import { getIncorrectAnswers } from "$lib/server/db/answers";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = needAuth(async ({ locals }) => {
	const answers = getIncorrectAnswers(locals.userData!.uuid);
	
	return json(answers);
});