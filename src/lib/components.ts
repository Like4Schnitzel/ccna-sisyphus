import type { QuestionDTO } from "./types.ts";

export const questions: QuestionDTO[] = [
    {
        id: 1,
        text: "Wer ist eigentlich Gubi Fortnite?",
        type: "match",
        staticOptions: [
            "Gubi", "Niek"
        ],
        movableOptions: 
        [
            {
                text: "Beats",
                correctMatch: "Niek"
            },
            {
                text: "Fortnite",
                correctMatch: "Gubi"
            }
        ]
    },
    {
        id: 2,
        text: "Was ist eigentlich opsec?",
        type: "mcq",
        answers: [
            {
                text: "One Piece",
                correct: false
            },
            {
                text: "Operation Security",
                correct: true
            },
            {
                text: "Overpowered Security",
                correct: false
            }
        ]
    }
]