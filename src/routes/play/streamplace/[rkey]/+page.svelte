<script lang="ts">
	import type { PageProps } from './$types';
	import Player from "$components/player/Player.svelte"
	import { getStreamplaceVideoPlaylistUrl } from '$lib/api/streamplace';

	let { data, params }: PageProps = $props();
	let { rkey } = $derived(params);
	let { video } = $derived(data);

	let createdAt = $derived.by(() => {
		let date = new Date(video.createdAt);
		return date.toLocaleString();
	});

	let src = $derived(getStreamplaceVideoPlaylistUrl(rkey));
</script>

<main>
	<div class="container">
		<Player title={video.title} src={src} />
		<h2>
			{video.title}
		</h2>
		<p>
			<a href={`https://stream.place/${video.creatorDid}`} target="_blank">{video.creatorHandle}</a>
		</p>
		<p class="created-at">
			{createdAt}
		</p>
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

	h2 {
		font-size: var(--font-size-4);
		margin: var(--size-1) 0;
	}

	.created-at {
		margin: var(--size-1) 0;
	}
</style>
