import { getUserForSession, SESSION_COOKIE_NAME } from "$lib/server/db/sessions";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
	const sessionCookie = cookies.get(SESSION_COOKIE_NAME);
	return {
		userData: sessionCookie != null ? await getUserForSession(sessionCookie) : null
	};
};