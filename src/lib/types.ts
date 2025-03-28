type QuestionBase = {
    id: number,
    text: string
}

type TextAnswer = {
    text: string,
    correct: boolean
}

type ImgAnswer = {
    imgSrc: string,
    correct: boolean
}

type MCQQuestionDTO = QuestionBase & {
    type: "mcq",
    imgSrc?: string,
    imgAlt?: string,
    answers: (TextAnswer | ImgAnswer)[],
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
