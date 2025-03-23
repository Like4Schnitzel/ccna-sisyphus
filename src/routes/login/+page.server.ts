import { createUser, getUserForLogin } from "$lib/server/db/users";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { createSession, SESSION_COOKIE_NAME, SESSION_EXPIRY } from "$lib/server/db/sessions";
import { type } from "arktype";

const loginPayload = type({
	"username": "string",
	"password": "string > 5"
});

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData.entries());

		const validationResult = loginPayload(data);
		if (validationResult instanceof type.errors) {
			return fail(400, {
				"error": validationResult.summary
			});
		}

		const user = await getUserForLogin(validationResult.username, validationResult.password);
		if (!user) {
			return fail(401, {
				error: "Invalid username or password"
			});
		}

		const sessionId = await createSession(user.uuid);
		cookies.set(SESSION_COOKIE_NAME, sessionId, {
			path: "/",
			expires: new Date(Date.now() + SESSION_EXPIRY)
		});

		throw redirect(303, "/");
	},

	register: async ({ request, cookies }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData.entries());

		const validationResult = loginPayload(data);
		if (validationResult instanceof type.errors) {
			return fail(400, {
				"error": validationResult.summary
			});
		}

		try {
			const user = await createUser(validationResult.username, validationResult.password, "user");

			const sessionId = await createSession(user.uuid);
			cookies.set(SESSION_COOKIE_NAME, sessionId, {
				path: "/",
				expires: new Date(Date.now() + SESSION_EXPIRY)
			});
		} catch (e) {
			return fail(500, {
				"error": e instanceof Error ? e.message : "unknown"
			});
		}

		throw redirect(303, "/");
	}
};