<script lang="ts">
	let {
		video
	} = $props();

	let rkey = $derived.by(() => {
		const i = video.uri.lastIndexOf('/');
		return video.uri.substring(i + 1);
	});
</script>

<li>
	<h2>
		<a href={`/play/streamplace/${rkey}`}>{video.title}</a>
	</h2>
	<p>
		<a href={`https://bsky.app/profile/${video.creatorDid}`} target="_blank">{video.creatorHandle}</a>
	</p>
</li>

<style>
	li {
		display: block;
		padding: var(--size-2);
		border-bottom: var(--border-size-2) solid var(--gray-7);
	}

	h2 {
		font-size: var(--font-size-3);
	}

	h2 > a {
		color: var(--blue-2);
	}
</style>
