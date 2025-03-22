type QuestionBase = {
    id: number,
    text: string
}

type MCQQuestionDTO = QuestionBase & {
    type: "mcq",
    answers: {
        text: string,
        correct: boolean
    }[],
}

type MatchQuestionDTO = QuestionBase & {
    type: "match",
    staticOptions: string[],
    movableOptions: {
        text: string,
        correctMatch: MatchQuestionDTO["staticOptions"][number]
    }[]
}

type MCQQuestion = MCQQuestionDTO & {
    answers: {
        selected: boolean
    }[]
}

type MatchQuestion = MatchQuestionDTO & {
    movableOptions: {
        matchedTo: MatchQuestionDTO["staticOptions"][number] | null
    }[]
}

export type QuestionDTO = MCQQuestionDTO | MatchQuestionDTO;

export type Question = MCQQuestion | MatchQuestion;
