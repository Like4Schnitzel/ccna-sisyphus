<script lang="ts">
    import type { Question, QuestionDTO } from "./types";
    export let questionDTO: QuestionDTO;

    const MAX_MATCH_COLUMNS = 4

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
        <header>
            <h1>
                <span class="question-id">{question.id}.</span>
                <span class="question-title">{question.text}</span>
                <span class="quiz-time">0s</span> <!-- TODO timer -->
            </h1>
        </header>
        {#if question.type === "mcq"}
            <ul class="mcq" style="--width-division-mcq: {Math.ceil(Math.sqrt(question.answers.length))}">
                {#each question.answers as answer, i (i)}
                    <li>
                        <label for={i.toString()}>
                            <p>{answer.text}</p>
                            {#if correctAnswersAmount === 1}
                                <input type="radio" name="answer" id={i.toString()} value={i} bind:group={selectedAnswer} />
                            {:else}
                                <input type="checkbox" name="answer" id={i.toString()} value={i} bind:group={selectedAnswer} />
                            {/if}
                        </label>
                    </li>
                {/each}
            </ul>
        {:else if question.type === "match"}
            <div class="match" style="--width-division-match: {
            Math.ceil(Math.sqrt(Math.ceil(question.staticOptions.length / MAX_MATCH_COLUMNS) % MAX_MATCH_COLUMNS + MAX_MATCH_COLUMNS))
            }">
                {#each question.staticOptions as option, i (i)}
                    <div class="match-component-wrapper-wrapper">
                        <div class="match-component-wrapper">
                            <div class="match-component">
                                <h2>{option}</h2>
                                <select bind:value={selectedMovableAnswers[i]}>
                                    <option value={null} selected>Select an answer</option>
                                    {#each question.movableOptions as answer, j (j)}
                                        <option value={j}>{answer.text}</option>
                                    {/each}
                                </select>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
        <div class="submit">
            <button>Submit</button> <!-- TODO submission logic -->
        </div>
    </div>
{/if}

<style>
    :root {
        --initial-mcq-background: white;
        --hovered-mcq-background: rgba(135, 206, 250, 0.321);
        --selected-mcq-background: lightskyblue;
    }

    .question {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .mcq, .match {
        flex-grow: 1;
        display: flex;
        flex-flow: row wrap;
        margin: 0;
        padding: 0;
        justify-content: center;
    }

    .match {
        justify-content: space-evenly;
        text-align: center;
    }

    .match-component-wrapper-wrapper {
        width: calc(100% / var(--width-division-match));
        margin-bottom: calc(20% / var(--width-division-match));
        align-self: center;
    }

    .match-component-wrapper {
        padding-left: 5%;
        padding-right: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .match-component {
        height: max-content;
        width: fit-content;
        align-self: center;
        background-color: gray;
        border-radius: 5px;
        padding: 1rem;
        padding-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .match-component h2 {
        margin-top: 0;
        height: max-content;
    }

    .match-component select {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    .mcq li {
        list-style: none;
        flex-grow: 1;
        width: calc(100% / var(--width-division-mcq));
        outline: 2px solid black; /* TODO fix weird behavior on hover */
        background-color: var(--initial-mcq-background);
    }

    .mcq li:hover {
        background-color: var(--hovered-mcq-background);
    }

    .mcq li:has(input:checked) {
        background-color: var(--selected-mcq-background);
    }

    .mcq li label {
        position: relative;
        width: 100%;
        height: 100%;
        display: inline-block;
    }

    .mcq li label p {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        font-weight: bold;
        font-size: larger;
        text-align: center;
    }

    .mcq li label input {
        width: 100%;
        height: 100%;
        opacity: 0;
        margin: 0;
    }

    header {
        border-bottom: 1px solid black;
    }

    h1 {
        display: flex;
        margin-top: 1rem;
        margin-bottom: 1rem;
        justify-content: space-between;
        gap: 1rem;
    }

    .question-id {
        flex-grow: 1;
        margin-left: 1rem;
    }

    .quiz-time {
        flex-grow: 1;
        margin-right: 1rem;
        text-align: right;
    }

    .question-title {
        flex-grow: 2;
        text-align: center;
    }

    .submit button {
        padding-top: 1rem;
        padding-bottom: 1rem;
        width: 100%;
        height: 100%;
        border: 0;
        font-weight: bold;
        border-top: 1px solid black;
    }
</style>
