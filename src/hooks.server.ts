import { getUserForSession, SESSION_COOKIE_NAME } from "$lib/server/db/sessions";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	// add user data as local so it's a bit easier to work with
	const sessionCookie = event.cookies.get(SESSION_COOKIE_NAME);
	if (sessionCookie != null) {
		event.locals.userData = await getUserForSession(sessionCookie);
	}

	return await resolve(event);
}