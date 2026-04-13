export type AtRecord<ValueType> = {
	cid: string;
	uri: string;
	value: ValueType;
};

export type VideoRecord = AtRecord<VideoRecordValue>;

export type VideoRecordValue = {
	$type: string;
	title: string;
	source: VideoRecordValueSource;
	creator: string;
	duration: number;
	createdAt: string;
	livestream?: {
		cid: string;
		uri: string;
	};
};

export type VideoRecordValueSource = {
	end?: number;
	ref: string;
	size: number;
	$type: string;
	start?: number;
	mimetype: string;
};

export type ListRecordsResponse<RecordType extends AtRecord<unknown>> = {
	records: Array<RecordType>;
	cursor: string;
};
