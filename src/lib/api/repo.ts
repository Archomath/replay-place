import type { AtRecord, ListRecordsResponse } from "./types";

export async function getRecord<RecordType extends AtRecord<unknown>>(
  fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>,
  pdsUrl: string,
  repoDid: string,
  collection: string,
  rkey: string,
): Promise<RecordType> {
  const url = `${pdsUrl}/xrpc/com.atproto.repo.getRecord?repo=${repoDid}&collection=${collection}&rkey=${rkey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to get record: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

export async function listRecords<RecordType extends AtRecord<unknown>>(
  fetch: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response>,
  pdsUrl: string,
  repoDid: string,
  collection: string,
  cursor?: string,
): Promise<ListRecordsResponse<RecordType>> {
  const url = `${pdsUrl}/xrpc/com.atproto.repo.listRecords?repo=${repoDid}&collection=${collection}&cursor=${cursor ?? ""}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to get records: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
