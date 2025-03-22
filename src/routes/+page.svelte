<script lang="ts">
    import type { User } from '$lib/server/db/users';
    import { getContext } from 'svelte';

	const user = getContext<User | null>("userData");
</script>

{#if user}
	yo {user.username}
{:else}
	you're not logged in!
{/if}