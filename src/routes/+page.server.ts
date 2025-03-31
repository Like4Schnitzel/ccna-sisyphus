import { questions } from "$lib/components";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return {
		questions: questions.map(q => ({
			id: q.id,
			text: q.text
		}))
	}
};