<script lang="ts">
    import { setContext } from 'svelte';
    import { questions } from '$lib/components';
    let { children, data } = $props();

    // set userData context if we're signed in
    if (data.userData) {
        setContext("userData", data.userData);
    }

    let currentQuestionIndex = $state(questions.findIndex((q) => q.id === data.currentQuestion));
    let previousQuestion, nextQuestion;
    let previousQuestionHref = $state("");
    let nextQuestionHref = $state("");
    if (currentQuestionIndex >= 0) {
        previousQuestion = questions[currentQuestionIndex - 1]?.id;
        nextQuestion = questions[currentQuestionIndex + 1]?.id;

        previousQuestionHref = previousQuestion !== undefined ? `/questions/${previousQuestion}` : "";
        nextQuestionHref = nextQuestion !== undefined ? `/questions/${nextQuestion}` : "";
    }
</script>

<div class="main">
    <header>
        <h1>Quiz App</h1>
        {#if data.userData}
            <a href="/logout">{data.userData.username}</a>
        {:else}
            <a href="/login">login</a>
        {/if}
    </header>
    <div class="content">
        {@render children()}
    </div>
    <nav>
        {#if previousQuestionHref !== ""}
            <a data-sveltekit-preload-data data-sveltekit-reload href={previousQuestionHref}>Previous</a>
        {:else}
            <div></div> <!-- Placeholder -->        {/if}
        <p>Gubi</p>
        {#if nextQuestionHref !== ""}
            <a data-sveltekit-preload-data data-sveltekit-reload href={nextQuestionHref}>Next</a>
        {:else}
            <div></div> <!-- Placeholder -->
        {/if}
    </nav>
</div>

<style>
    :global(body) {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        height: 100vh;
    }

    :global(.error) {
        color: red;
    }

    .main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    header, nav {
        background-color: #111;
        color: azure;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 2%;
        padding-right: 2%;
    }

    .content {
        flex: 1;
    }

    h1 {
        margin: 0;
    }

    nav, a:any-link {
        color: #c0ddff;
    }
</style>
