import { getUserForSession, SESSION_COOKIE_NAME } from "$lib/server/db/sessions";
import { questions } from '$lib/components';
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	// add user data as local so it's a bit easier to work with
	const sessionCookie = event.cookies.get(SESSION_COOKIE_NAME);
	if (sessionCookie != null) {
		event.locals.userData = await getUserForSession(sessionCookie);
	}

	const pathMatch = event.url.pathname.match(/^\/questions\/(\d+)$/);
	let currentQuestion;
	if (pathMatch) {
		currentQuestion = Number.parseInt(pathMatch[1]);
	} else {
		currentQuestion = null;
	}

	const currentQuestionIndex = questions.findIndex((q) => q.id === currentQuestion);
	if (currentQuestionIndex >= 0) {
		event.locals.previousQuestion = questions[currentQuestionIndex - 1]?.id;
		event.locals.nextQuestion = questions[currentQuestionIndex + 1]?.id;
	} else {
		event.locals.previousQuestion = undefined;
		event.locals.nextQuestion = undefined;
	}

	return await resolve(event);
}