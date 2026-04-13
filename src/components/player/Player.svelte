<script lang="ts">
	let {
		src,
		title,
	} = $props();

	// const m3u = "https://vod-beta.stream.place/xrpc/place.stream.playback.getVideoPlaylist?uri=at://did:plc:rbvrr34edl5ddpuwcubjiost/place.stream.video/3mi2ikg6gij26";
</script>

<media-player
	title={title}
	playsInline
>
	<media-provider>
		<source src={src} type="video/mp4">
		<!-- <media-poster
			class="vds-poster"
			src="https://files.vidstack.io/sprite-fight/poster.webp"
			alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
		></media-poster> -->
	</media-provider>
	<!-- <media-video-layout
		// thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
	></media-video-layout> -->
	<media-plyr-layout
		// thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
	></media-plyr-layout>
</media-player>

<style>
	media-plyr-layout {
		font-family: var(--font-transitional);
		font-variant-numeric: tabular-nums;
		font-feature-settings: "tnum";
	}
</style>
