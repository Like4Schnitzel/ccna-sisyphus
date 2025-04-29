import { error } from "@sveltejs/kit";
import { questions } from "$lib/components";
import { removeAnswersFromQuestion } from "$lib/server/questions";

export async function load({ params }) {
    const qIdNum: number = parseInt(params.questionId);
    if (isNaN(qIdNum)) return error(400);

    const questionIndex = questions.findIndex(q => q.id === qIdNum);
    if (questionIndex == -1) return error(404);
    const question = questions[questionIndex];

    return {
      question: removeAnswersFromQuestion(question),
      nextQuestion: questions[questionIndex + 1]?.id,
      prevQuestion: questions[questionIndex - 1]?.id,
    };
}
