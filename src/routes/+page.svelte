<script lang="ts">
    import { goto } from "$app/navigation";
    import { questions } from "$lib/components";

    let searchValue = $state("");
    let filteredQuestions = $derived(questions.filter(q => `${q.id}. ${q.text}`.includes(searchValue)));
</script>

<main>
    <button class="start-first" onclick={() => goto("/questions/1")}>
        start training
    </button>

    <hr>
    
    <input type="text" class="search" bind:value={searchValue} placeholder="search...">

    <details open>
        <summary>Available questions</summary>
        <div class="question-list">
            {#each filteredQuestions as question}
                <a href={`/questions/${question.id}`} class="card">
                    <b>{question.id}</b>. {question.text}
                </a>
            {/each}
        </div>
    </details>    
</main>

<style>
    main {
        padding: 1em;
        max-width: 900px;
        margin: 0 auto;
    }

    .start-first {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 8rem;
        font-size: 2em;
    }

    .search {
        width: calc(100% - 1em);
        padding: 0.33em;
        margin: 0 auto;
        margin-bottom: 0.25em;
    }

    .question-list {
        padding-top: 0.3em;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.25rem;
        margin: 0 auto;
    }

    .card {
        border: 1px solid #000;
        border-radius: 4px;
        padding: 1rem;
        display: block;
        text-decoration: none;
    }

    .card:any-link {
        color: #000;
    }
</style>