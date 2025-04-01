import { error } from "@sveltejs/kit";
import { questions } from "$lib/components";
import { removeAnswersFromQuestion } from "$lib/server/questions";

export async function load({ params }) {
    const qIdNum: number = parseInt(params.questionId);
    if (isNaN(qIdNum)) return error(400);

    const question = questions.find(q => q.id === qIdNum);
    if (!question) return error(404);

    return removeAnswersFromQuestion(question);
}
