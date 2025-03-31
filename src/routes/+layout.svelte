<script lang="ts">
    import { setContext } from 'svelte';
    import { questions } from '$lib/components';
    let { children, data } = $props();

    // set userData context if we're signed in
    if (data.userData) {
        setContext("userData", data.userData);
    }

    const currentQuestionIndex = questions.findIndex((q) => q.id === data.currentQuestion)
    const previousQuestion: number | undefined = questions[currentQuestionIndex - 1]?.id;
    const nextQuestion: number | undefined = questions[currentQuestionIndex + 1]?.id;

    const previousQuestionHref = previousQuestion ? `/questions/${previousQuestion}` : "";
    const nextQuestionHref = nextQuestion ? `/questions/${nextQuestion}` : "";
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
    <nav data-sveltekit-preload-data data-sveltekit-reload>
        <a href={previousQuestionHref}>Previous</a>
        <p>Gubi</p>
        <a href={nextQuestionHref}>Next</a>
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
