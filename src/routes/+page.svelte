<script lang="ts">
    import Card from '$components/card/Card.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { videos } = $derived(data);
</script>

<main>
	<div class="container">
		<h1>ATmosphereConf 2026 Video Archive</h1>
		<ul>
			{#each videos as video}
				<Card video={video}></Card>
			{/each}
		</ul>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: start;
		flex: 1 0 auto;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: start;
		min-width: none;
		width: 100%;
		padding: var(--size-3);
		flex: 1 0 auto;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: start;
		list-style-type: none;
		padding: 0;
	}

	h1 {
		margin: 0 0 var(--size-3) 0;
		font-size: var(--font-size-5);
	}
</style>
