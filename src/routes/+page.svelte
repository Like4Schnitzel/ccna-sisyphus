<script lang="ts">
    import Question from "$lib/Question.svelte";
    import { questions } from "$lib/components";
</script>

<Question questionDTO={questions[0]} />
<Question questionDTO={questions[1]} />
