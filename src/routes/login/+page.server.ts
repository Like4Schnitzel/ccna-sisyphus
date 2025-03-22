import { getUserForLogin } from "$lib/server/db/users";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { createSession, SESSION_COOKIE_NAME } from "$lib/server/db/sessions";

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		
		// TODO(f): validate these inputs
		const username = data.get("username");
		const password = data.get("password");
		console.log(username, password);

		const user = await getUserForLogin(username as string, password as string);
		if (!user) {
			return fail(401, {
				error: "Invalid username or password"
			});
		}

		const sessionId = await createSession(user.uuid);
		cookies.set(SESSION_COOKIE_NAME, sessionId, {
			path: "/",
			expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
		});

		throw redirect(303, "/");
	}
};