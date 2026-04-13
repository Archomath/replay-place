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

<svelte:head>
	<title>Home | Re:place</title>
</svelte:head>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: start;
		flex: 1;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: start;
		width: 100%;
		padding: var(--size-3);
		flex: 1;
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
