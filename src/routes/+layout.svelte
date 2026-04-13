<script lang="ts">
    import Header from '$components/header/Header.svelte';

	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import '$lib/assets/fonts/fonts.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

{@render children()}
