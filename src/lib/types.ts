type QuestionBase = {
    id: number,
    text: string
}

type MCQQuestion = QuestionBase & {
    type: "mcq",
    answers: {
        text: string,
        correct: boolean
    }[],
}

type MatchQuestion = QuestionBase & {
    type: "match",
    staticOptions: string[],
    movableOptions: {
        text: string,
        correctMatch: MatchQuestion["staticOptions"][number]
    }
}

export type Question = MCQQuestion | MatchQuestion;
