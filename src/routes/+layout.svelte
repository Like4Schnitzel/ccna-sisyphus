<script lang="ts">
    const {children} = $props();
</script>

<style>
    :global(body) {
        font-family: Arial, sans-serif;
    }

    :global(.error) {
        color: red;
    }
</style>

{@render children()}
