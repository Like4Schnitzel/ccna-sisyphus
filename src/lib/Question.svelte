<script lang="ts">
    import Select from "svelte-select";
    import type { Question, QuestionDTO } from "./types";
    export let questionDTO: QuestionDTO;

    const MAX_MATCH_COLUMNS = 4

    let submissionCorrect: boolean | null = null;
    let submitted = false;
    let submitText = "Submit";
    let submitClass = "";
    let inputClasses: ("correct"|"incorrect"|"")[] = [];
    let submitButton: HTMLButtonElement;
    let mcqInputs: HTMLInputElement[] = [];
    const matchSelectsAtSubmit: (string|null)[] = [];
    async function submitQuestion() {
        if (submitted || !question) return;

        if (question.type === "mcq") {
            if (selectedAnswer === null) {
                console.error("selectedAnswer is null");
                return;
            }

            submitted = true;
            submitButton.disabled = true;

            const response = await fetch(`/api/answers/${question.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(question),
            }).then(r => r.json());

            for (let i = 0; i < response.question.answers.length; i++) {
                mcqInputs[i].disabled = true;
                if (response.question.answers[i].correct) {
                    inputClasses[i] = "correct";
                } else {
                    inputClasses[i] = "incorrect";
                }
            }
            inputClasses = inputClasses;

            submissionCorrect = response.correct;
        } else if (question.type === "match") {
            submitted = true;
            submitButton.disabled = true;

            const response = await fetch(`/api/answers/${question.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(question),
            }).then(r => r.json());

            submissionCorrect = true;
            for (let i = 0; i < question.staticOptions.length; i++) {
                matchSelectsAtSubmit.push(question.staticOptions[i].matchedTo);
                if (matchSelectsAtSubmit[i] === response.question.staticOptions[i].correctMatch) {
                    inputClasses[i] = "correct";
                } else {
                    submissionCorrect = false;
                    inputClasses[i] = "incorrect";
                }
            }
        }

        if (submissionCorrect) {
            submitClass = "correct";
            submitText = "Correct!";
        } else {
            submitClass = "incorrect";
            submitText = "Incorrect";
        }
    }

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
            staticOptions: questionDTO.staticOptions.map((option) => ({
                ...option,
                matchedTo: null,
            })),
        }
    } else {
        question = null;
        console.error("Question type not implemented:", questionDTO);
    }

    if (question?.type === "mcq") {
        inputClasses = question.answers.map(() => "");
    } else if (question?.type === "match") {
        inputClasses = question.staticOptions.map(() => "");
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
        <form on:submit={submitQuestion} class="question">
            {#if question.type === "mcq"}
                {#if 'imgSrc' in question}
                    <img src={question.imgSrc} alt={question.imgAlt} class="question-image" />
                {/if}
    
                <ul class="mcq" style="--width-division-mcq: {Math.ceil(Math.sqrt(question.answers.length))}">
                    {#each question.answers as answer, i (i)}
                        <li class={inputClasses[i]}>
                            <label for={i.toString()}>
                                {#if "text" in answer}
                                    <p>{answer.text}</p>
                                {:else if "imgSrc" in answer}
                                    <!--svelte-ignore a11y_missing_attribute-->
                                    <!-- the source data doesn't have alt text -->
                                    <img src={answer.imgSrc} />
                                {/if}
                                {#if correctAnswersAmount === 1}
                                    <input type="radio" name="answer" id={i.toString()} bind:this={mcqInputs[i]} value={i} bind:group={selectedAnswer} tabindex={1} />
                                {:else}
                                    <input type="checkbox" name="answer" id={i.toString()} bind:this={mcqInputs[i]} value={i} bind:group={selectedAnswer} tabindex={1}/>
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
                                <div class="match-component {inputClasses[i]}">
                                    <h2>{option.text}</h2>
                                    <Select items={question.movableOptions} bind:justValue={question.staticOptions[i].matchedTo} inputAttributes={{ tabindex: 1 }}>
                                        <div class="select-selection" slot="selection" let:selection>
                                            {selection.label}
                                            {#if submitted}
                                                {#if selection.value === question.staticOptions[i].correctMatch}
                                                    <div class="correct"></div>
                                                {:else if selection.value === matchSelectsAtSubmit[i]}
                                                    <div class="incorrect"></div>
                                                {/if}
                                            {/if}
                                        </div>
                                        <div class="select-item" slot="item" let:item>
                                            {item.label}
                                            {#if submitted}
                                                {#if item.value === question.staticOptions[i].correctMatch}
                                                    <div class="correct"></div>
                                                {:else if item.value === matchSelectsAtSubmit[i]}
                                                    <div class="incorrect"></div>
                                                {/if}
                                            {/if}
                                        </div>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
            <div class="submit">
                <button bind:this={submitButton} class={submitClass} type="submit" tabindex={2}>{submitText}</button>
            </div>
        </form>
    </div>
{/if}


<style>
    :root {
        --initial-mcq-background: white;
        --hovered-mcq-background: rgba(135, 206, 250, 0.321);
        --selected-mcq-background: lightskyblue;
    }

    button.correct {
        color: lime;
    }

    .select-item:has(.correct), .select-selection:has(.correct) {
        color: lime;
        font-weight: bold;
    }

    button.incorrect {
        color: red;
    }

    .select-item:has(.incorrect), .select-selection:has(.incorrect) {
        color: red;
        font-weight: bold;
    }

    li.correct, .match-component.correct {
        background-color: lightgreen !important;
    }

    li.incorrect, .match-component.incorrect {
        background-color: lightcoral !important;
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

    .mcq li {
        list-style: none;
        flex-grow: 1;
        width: calc(100% / var(--width-division-mcq));
        outline: 2px solid black; /* TODO fix weird behavior on hover */
        background-color: var(--initial-mcq-background);
    }

    .mcq li:hover, .mcq li:has(input:focus-visible) {
        background-color: var(--hovered-mcq-background);
    }

    .mcq li:has(input:checked) {
        background-color: var(--selected-mcq-background);
    }

    .mcq li:has(input:focus-visible:checked, input:hover:checked) {
        background-color: color-mix(in hsl, var(--selected-mcq-background), var(--hovered-mcq-background) 70%)
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

    .mcq li label img {
        position: absolute;
        left: 5%;
        top: 5%;
        width: 90%;
        height: 90%;
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
        font-size: x-large;
        font-weight: bold;
        border-top: 1px solid black;
    }

    .question-image {
        max-height: 40%;
        max-width: 100%;
        align-self: center;
    }

    .question header {
        font-size: clamp(0.7rem, 2vw, 1rem);
    }
</style>
