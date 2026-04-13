import type { PageLoad } from "./$types";
import "vidstack/bundle";
import type { VideoData } from "$lib/types";
import type { VideoRecord } from "$lib/api/types";
import { listAllVideos } from "$lib/api/streamplace";
import { resolveDid } from "$lib/api/identity";

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

async function toVideos(records: Array<VideoRecord>): Promise<Array<VideoData>> {
  const videos: Array<VideoData> = [];

  for (let record of records) {
    videos.push(await toVideo(record));
  }

  return videos;
}

export const load: PageLoad = async ({ fetch }) => {
  const videoRecords = await listAllVideos(fetch);
  const videos = await toVideos(videoRecords);

  return { videos };
};
