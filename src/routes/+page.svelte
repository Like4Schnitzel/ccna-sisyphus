<script lang="ts">
    import type { QuestionDTO as QuestionType } from "$lib/types";
    import Question from "$lib/Question.svelte";

    let q: QuestionType = {
        id: 1,
        text: "Was ist eigentlich opsec?",
        type: "mcq",
        answers: [
            { text: "Operation Security", correct: false },
            { text: "Operational Security", correct: true },
            { text: "Operative Security", correct: false },
            { text: "Operational Secrecy", correct: true},
        ],
    }
</script>

<Question questionDTO={q} />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
