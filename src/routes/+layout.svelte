<script lang="ts">
    import { setContext } from 'svelte';

	let { children, data } = $props();

	// set userData context if we're signed in
	if (data.userData) {
		setContext("userData", data.userData);
	}
</script>

{@render children()}