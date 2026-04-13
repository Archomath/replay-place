<script lang="ts">
	import type { PageProps } from './$types';
	import Player from "$components/player/Player.svelte"
	import { getStreamplaceVideoPlaylistUrl } from '$lib/api/streamplace';

	let { params }: PageProps = $props();
	let { rkey } = $derived(params);

	let src = $derived(getStreamplaceVideoPlaylistUrl(rkey));
</script>

<main>
	<div class="container">
		<Player title={""} src={src} />
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		flex: 1;
	}

	.container {
		width: 100%;
		padding: var(--size-3);
	}

	@media (min-width: 672px) {
		.container {
			width: 672px;
		}
	}

	@media (min-width: 952px) {
		.container {
			width: 952px;
		}
	}

	@media (min-width: 1312px) {
		.container {
			width: 1312px;
		}
	}
</style>
