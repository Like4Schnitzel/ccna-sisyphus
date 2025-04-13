<script lang="ts">
    import Question from "$lib/Question.svelte";

    let { data } = $props();
</script>

{#key data.question.id}
    <Question questionDTO={data.question} />
{/key}
