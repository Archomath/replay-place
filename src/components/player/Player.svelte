<script lang="ts">
	import coverImage from "./cover-image.jpg";

	let {
		src,
		title,
	} = $props();
</script>

<media-player
	title={title}
	playsInline
>
	<media-provider>
		<source src={src} type="application/x-mpegurl">
		<media-poster
			class="vds-poster"
			src={coverImage}
		></media-poster>
	</media-provider>
	<media-plyr-layout></media-plyr-layout>
</media-player>

<style>
	media-plyr-layout {
		font-family: var(--font-transitional);
		font-variant-numeric: tabular-nums;
		font-feature-settings: "tnum";
	}
</style>
