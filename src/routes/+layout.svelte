<script lang="ts">
    import { setContext } from 'svelte';
    let { children, data } = $props();

    // set userData context if we're signed in
    if (data.userData) {
        setContext("userData", data.userData);
    }

    let previousQuestionHref = $state(data.previousQuestion !== undefined ? `/questions/${data.previousQuestion}` : "");
    let nextQuestionHref = $state(data.nextQuestion !== undefined ? `/questions/${data.nextQuestion}` : "");
</script>

<div class="main">
    <header>
        <h1><a href="/" data-sveltekit-preload-data data-sveltekit-reload>Quiz App</a></h1>
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
        <div class="prev-wrapper">
            {#if previousQuestionHref !== ""}
                <a data-sveltekit-preload-data data-sveltekit-reload href={previousQuestionHref}>Previous</a>
            {/if}
        </div>
        <p>Gubi</p>
        <div class="next-wrapper">
            {#if nextQuestionHref !== ""}
                <a data-sveltekit-preload-data data-sveltekit-reload href={nextQuestionHref}>Next</a>
            {/if}
        </div>
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

    nav div {
        flex: 1;
    }

    .next-wrapper {
        display: flex;
        flex-direction: row-reverse;
    }
</style>
