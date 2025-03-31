// See https://svelte.dev/docs/kit/types#app.d.ts

import type { User } from "$lib/server/db/users";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			userData: User | null,
			currentQuestion: number | null
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
