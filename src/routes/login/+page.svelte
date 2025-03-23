<script lang="ts">
    import { enhance } from "$app/forms";

	const { form } = $props();
</script>

{#if form?.error}
	<p>{form.error}</p>
{/if}

<form use:enhance method="POST" action="?/login">
	<input type="text" name="username" placeholder="username">
	<input type="password" name="password" placeholder="password">
	<button>login</button>
	<button formaction="?/register">register</button>
</form>