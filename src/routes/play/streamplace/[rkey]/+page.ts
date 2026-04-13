import { resolveDid } from "$lib/api/identity";
import { getVideo } from "$lib/api/streamplace";
import type { VideoRecord } from "$lib/api/types";
import type { VideoData } from "$lib/types";

import type { PageLoad } from "./$types";

export const ssr = false;

async function toVideo(record: VideoRecord): Promise<VideoData> {
	const { cid, uri, value } = record;
	const { $type, createdAt, creator: creatorDid, duration, source, title, livestream } = value;

	const creatorActor = await resolveDid(creatorDid);

	return {
		creatorHandle: creatorActor.handle,
		creatorDid,
		duration,
		title,
		uri,
	};
}

export const load: PageLoad = async ({ fetch, params }) => {
	const { rkey } = params;
	const videoRecord = await getVideo(fetch, rkey);
	const video = await toVideo(videoRecord);

	return { video };
};
