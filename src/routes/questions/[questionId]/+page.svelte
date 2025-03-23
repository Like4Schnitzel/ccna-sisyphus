<script lang="ts">
    import Question from "$lib/Question.svelte";

    let { data } = $props();

    console.log(data);
</script>

<Question questionDTO={data} />
