<script lang="ts">
    import { questions } from "$lib/components";

    let searchValue = $state("");
    let filteredQuestions = $derived(questions.filter(q => `${q.id}. ${q.text}`.includes(searchValue)));
</script>

<main>
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

    .search {
        width: calc(100% - 1em);
        padding: 0.33em;
        margin-bottom: 0.25em;
    }

    .question-list {
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