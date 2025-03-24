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
    staticOptions: {
        text: string
        correctMatch: MatchQuestionDTO["movableOptions"][number] | null
    }[],
    movableOptions: string[]
}

type MCQQuestion = MCQQuestionDTO & {
    answers: {
        selected: boolean
    }[]
}

type MatchQuestion = MatchQuestionDTO & {
    staticOptions: {
        matchedTo: MatchQuestionDTO["movableOptions"][number] | null
    }[]
}

export type QuestionDTO = MCQQuestionDTO | MatchQuestionDTO;

export type Question = MCQQuestion | MatchQuestion;
