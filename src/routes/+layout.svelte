<script lang="ts">
	import Header from '$components/header/Header.svelte';

	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import '$lib/assets/fonts/fonts.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Re:place</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

<div class="container">
	{@render children()}
</div>

<style>
	.container {
		flex: 1;
		overflow-x: hidden;
		overflow-y: auto;
	}
</style>
