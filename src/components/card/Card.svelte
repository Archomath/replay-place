<script lang="ts">
	let {
		video
	} = $props();

	let rkey = $derived.by(() => {
		const i = video.uri.lastIndexOf('/');
		return video.uri.substring(i + 1);
	});

	let createdAt = $derived.by(() => {
		let date = new Date(video.createdAt);
		return date.toLocaleString();
	});

	let duration = $derived.by(() => {
		let remainder = Math.ceil(video.duration / 1000000000);
		let seconds = remainder % 60;
		remainder = Math.floor((remainder - seconds) / 60);
		let minutes = remainder % 60;
		remainder = Math.floor((remainder - minutes) / 60);
		let hours = remainder;
		return `${hours > 0 ? `${hours}h ` : ""}${minutes > 0 ? `${minutes}m ` : ""}${seconds}s`;
	});
</script>

<li>
	<h2>
		<a href={`/play/streamplace/${rkey}`}>{video.title}</a>
	</h2>
	<p>
		<a href={`https://bsky.app/profile/${video.creatorDid}`} target="_blank">{video.creatorHandle}</a>
	</p>
	<p>
		{createdAt}&nbsp;&nbsp;•&nbsp;&nbsp;{duration}
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
