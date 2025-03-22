<script lang="ts">
    import type { Question, QuestionDTO } from "./types";
    export let questionDTO: QuestionDTO;

    let question: Question | null;
    if (questionDTO.type === "mcq") {
        question = {
            ...questionDTO,
            answers: questionDTO.answers.map((answer) => ({
                ...answer,
                selected: false,
            })),
        }
    } else if (questionDTO.type === "match") {
        question = {
            ...questionDTO,
            movableOptions: questionDTO.movableOptions.map((option) => ({
                ...option,
                matchedTo: null,
            })),
        }
    } else {
        question = null;
        console.error("Question type not implemented:", questionDTO);
    }

    const correctAnswersAmount: number | null = question?.type == "mcq" ? question?.answers.filter((a) => a.correct).length : null;
    if (correctAnswersAmount === 0) {
        console.error("No correct answers found for MCQ:", question);
    }
    console.log(question);

    let selectedAnswer: number | null = null;
    $: if (question?.type === "mcq" && selectedAnswer !== null) {
        for (let i = 0; i < question.answers.length; i++) {
            question.answers[i].selected = i === selectedAnswer;
        }
    }
</script>

<button on:click={() => console.log(question)}>Log question</button>

{#if question === null}
    <p class="error">Unsupported question type</p>
{:else}
    <div>
        <h1>{question.id}. {question.text}</h1>
        {#if question.type === "mcq"}
            <ul>
                {#each question.answers as answer, i}
                    <li>
                        {#if correctAnswersAmount === 1}
                            <input type="radio" name="answer" id={i.toString()} value={i} bind:group={selectedAnswer} />
                        {:else}
                        {/if}
                        <label for={i.toString()}>{answer.text}</label>
                    </li>
                {/each}
            </ul>
        {:else if question.type === "match"}
            <p>Unimplemented</p> <!-- TODO -->
        {/if}
    </div>
{/if}
