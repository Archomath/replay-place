import { resolveDid } from "$lib/api/identity";
import { listAllVideos } from "$lib/api/streamplace";
import type { VideoRecord } from "$lib/api/types";
import type { VideoData } from "$lib/types";

import type { PageLoad } from "./$types";

async function toVideo(record: VideoRecord): Promise<VideoData> {
	const { cid, uri, value } = record;
	const { $type, createdAt, creator: creatorDid, duration, source, title, livestream } = value;

	const creatorActor = await resolveDid(creatorDid);

	return {
		createdAt,
		creatorHandle: creatorActor.handle,
		creatorDid,
		duration,
		title,
		uri,
	};
}

async function toVideos(records: Array<VideoRecord>): Promise<Array<VideoData>> {
	const videos: Array<VideoData> = [];

	for (let record of records) {
		videos.push(await toVideo(record));
	}

	videos.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

	return videos;
}

export const load: PageLoad = async ({ fetch }) => {
	const videoRecords = await listAllVideos(fetch);
	const videos = await toVideos(videoRecords);

	return { videos };
};
