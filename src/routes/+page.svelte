<script lang="ts">
    import { goto } from "$app/navigation";
    import { questions } from "$lib/components";

    let searchValue = $state("");
    let filteredQuestions = $derived(questions.filter(q => `${q.id}. ${q.text.toLowerCase()}`.includes(searchValue.toLowerCase())));
</script>

<main>
    <button class="start-first" onclick={() => goto("/questions/1")}>
        start training
    </button>
    <hr>

    <input type="text" class="search" bind:value={searchValue} placeholder="search...">
    
    <section class="individual-section">
        <div class="question-list">
            {#each filteredQuestions as question}
                <a href={`/questions/${question.id}`} class="card">
                    <b>{question.id}</b>. {question.text}
                </a>
            {/each}
        </div>
    </section>
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
        width: 100%;
        padding: 0.33em;
        margin: 0 auto;
        margin-bottom: 0.25em;
        box-sizing: border-box;
    }

    .question-list {
        padding-top: 0.3em;
        gap: 0.25rem;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .card {
        flex: 1 1 calc(100% / 3 - 0.25rem);
        border: 1px solid #000;
        border-radius: 4px;
        padding: 0.8rem;
        display: block;
        text-decoration: none;
        box-sizing: border-box;
        max-width: 33%;
        word-wrap: break-word;
    }

    .card:any-link {
        color: #000;
    }

    .individual-section {
        overflow: auto;
        height: 50vh;
    }
</style>