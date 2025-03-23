import { deleteSession, SESSION_COOKIE_NAME } from "$lib/server/db/sessions";
import { json, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ locals, cookies }) => {
	const sessionId = cookies.get(SESSION_COOKIE_NAME);
	if (sessionId) {
		const hasDeletedSession = await deleteSession(sessionId);
		cookies.delete(SESSION_COOKIE_NAME, { path: "/" });

		if (!hasDeletedSession) {
			return json({
				"error": "Couldn't log you out. Please try again."
			}, { status: 500 });
		}
	}
	
	throw redirect(303, "/");
};