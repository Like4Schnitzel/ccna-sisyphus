import { getUserForSession, SESSION_COOKIE_NAME } from "$lib/server/db/sessions";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	// add user data as local so it's a bit easier to work with
	const sessionCookie = event.cookies.get(SESSION_COOKIE_NAME);
	if (sessionCookie != null) {
		event.locals.userData = await getUserForSession(sessionCookie);
	}

	const pathMatch = event.url.pathname.match(/^\/questions\/(\d+)$/);
	if (pathMatch) {
		event.locals.currentQuestion = Number.parseInt(pathMatch[1]);
	} else {
		event.locals.currentQuestion = null;
	}

	return await resolve(event);
}