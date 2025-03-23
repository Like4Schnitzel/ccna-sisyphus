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

    let selectedAnswer: number[] | number | null = correctAnswersAmount === 1 ? null : [];
    $: if (question?.type === "mcq" && selectedAnswer !== null) {
        if (correctAnswersAmount === 1) {
            for (let i = 0; i < question.answers.length; i++) {
                question.answers[i].selected = i === selectedAnswer;
            }
        } else if (selectedAnswer instanceof Array) {
            for (let i = 0; i < question.answers.length; i++) {
                question.answers[i].selected = selectedAnswer.includes(i);
            }
        }
    }

    const selectedMovableAnswers: (number | null)[] = [];
</script>

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
                            <input type="checkbox" name="answer" id={i.toString()} value={i} bind:group={selectedAnswer} />
                        {/if}
                        <label for={i.toString()}>{answer.text}</label>
                    </li>
                {/each}
            </ul>
        {:else if question.type === "match"}
            <div class="horizontal">
                {#each question.staticOptions as option, i}
                    <div>
                        <h2>{option}</h2>
                        <select bind:value={selectedMovableAnswers[i]}>
                            <option value={null} selected>Select an answer</option>
                            {#each question.movableOptions as answer}
                                <option value={i}>{answer.text}</option>
                            {/each}
                        </select>
                    </div>
                {/each}
            </div>
        {/if}
        <div>
            <button>Submit</button> <!-- TODO submission logic -->
        </div>
    </div>
{/if}

<style>
    /* TODO */
    /* .error global */

    .horizontal {
        display: flex;
        gap: 2rem;
    }
</style>
