import type { ListRecordsResponse, VideoRecord } from "$lib/api/types";
import { getRecord, listRecords } from "./repo";

const PDS_URL = "https://iameli.com";
const STREAMPLACE_DID = "did:plc:rbvrr34edl5ddpuwcubjiost";

export function getStreamplaceVideoPlaylistUrl(rkey: string): string {
  const uri = `at://did:plc:rbvrr34edl5ddpuwcubjiost/place.stream.video/${rkey}`;
  const src = `https://vod-beta.stream.place/xrpc/place.stream.playback.getVideoPlaylist?uri=${uri}`;

  return src;
}

export async function getVideo(
  fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>,
  rkey: string,
): Promise<VideoRecord> {
  return getRecord(fetch, PDS_URL, STREAMPLACE_DID, "place.stream.video", rkey);
}

export async function listVideos(
  fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>,
  cursor?: string,
): Promise<ListRecordsResponse<VideoRecord>> {
  return listRecords(fetch, PDS_URL, STREAMPLACE_DID, "place.stream.video", cursor);
}

export async function listAllVideos(
  fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>,
): Promise<Array<VideoRecord>> {
  const allRecords: Array<VideoRecord> = [];

  let currentCursor: string | undefined = undefined;
  while (true) {
    const { records, cursor } = await listVideos(fetch, currentCursor);
    if (records.length === 0) {
      break;
    }
    allRecords.push(...records);
    currentCursor = cursor;
  }

  return allRecords;
}
