<script lang="ts">
    const { data } = $props();
    const { questions } = data;

    let searchValue = $state("");
    let filteredQuestions = $derived(questions.filter(q => `${q.id}. ${q.text.toLowerCase()}`.includes(searchValue.toLowerCase())));
</script>

<main>
    <a class="start-first" href="/questions/1">start training</a>

    <input type="text" class="search" bind:value={searchValue} placeholder="search...">
    <section class="question-list">
        {#each filteredQuestions as question (question.id)}
            <a href={`/questions/${question.id}`} class="card">
                <b>{question.id}</b>. {question.text}
            </a>
        {/each}
    </section>
</main>

<style>
    main {
        max-width: 900px;
        margin: 1em auto;
        padding: 0 1em;
        max-height: calc(100% - 2em); /* 2em padding */
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .start-first {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        width: 100%;
        text-decoration: none;
        color: white;
        background-color: darkgray; /* why is darkgray lighter than gray ???? */
        border-radius: 5px;
        border: 1px solid black;
        font-size: 2em;
        min-height: 3em;
    }

    .start-first:hover {
        background-color: rgb(148, 148, 148);
    }

    .start-first:active {
        background-color: gray;
    }

    .search {
        padding: 0.33em;
        margin-bottom: 1em;
        margin-top: 1em;
    }

    .question-list {
        padding-top: 0.3em;
        gap: 0.25em;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        flex-grow: 1;
        height: 50vh;
    }

    .card {
        flex: 1 1 calc(100% / 3 - 0.25em);
        border: 1px solid #000;
        border-radius: 4px;
        padding: 0.8em;
        display: block;
        text-decoration: none;
        box-sizing: border-box;
        min-width: 14em;
        word-wrap: break-word;
    }

    .card:any-link {
        color: #000;
    }
</style>