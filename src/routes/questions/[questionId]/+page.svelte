<script lang="ts">
    import Question from "$lib/Question.svelte";

    let { data } = $props();
</script>

<Question questionDTO={data} />
