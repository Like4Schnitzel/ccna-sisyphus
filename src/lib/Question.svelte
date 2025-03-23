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
    <div class="question">
        <h1>{question.id}. {question.text}</h1>
        {#if question.type === "mcq"}
            <ul class="mcq" style="--width-division: {Math.ceil(Math.sqrt(question.answers.length))}">
                {#each question.answers as answer, i (i)}
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
                {#each question.staticOptions as option, i (i)}
                    <div>
                        <h2>{option}</h2>
                        <select bind:value={selectedMovableAnswers[i]}>
                            <option value={null} selected>Select an answer</option>
                            {#each question.movableOptions as answer, j (j)}
                                <option value={j}>{answer.text}</option>
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
    .horizontal {
        display: flex;
        gap: 2rem;
    }

    .question {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .mcq {
        flex-grow: 1;
        display: flex;
        flex-flow: row wrap;
        margin: 0;
        padding: 0;
        justify-content: center;
    }

    .mcq li {
        list-style: none;
        flex-grow: 1;
        width: calc(100% / var(--width-division));
        outline: 2px solid black;
    }

    h1 {
        margin: 0;
    }
</style>
