<script lang="ts">
    import { setContext } from 'svelte';
    let { children, data } = $props();

    // set userData context if we're signed in
    if (data.userData) {
        setContext("userData", data.userData);
    }
</script>

<div class="main">
    <header>
        <h1>Quiz App</h1>
    </header>
    <div class="content">
        {@render children()}
    </div>
    <footer>
        <p>Gubi</p>
    </footer>
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

    header, footer {
        background-color: #111;
        color: azure;
    }

    .content {
        flex: 1;
    }

    h1 {
        margin: 0;
    }
</style>
