<script lang="ts">
    import type { QuestionDTO as QuestionType } from "$lib/types";
    import Question from "$lib/Question.svelte";

    let q: QuestionType[] = [
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
</script>

<Question questionDTO={q[0]} />
<Question questionDTO={q[1]} />
