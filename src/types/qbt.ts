export interface QBTMedia {
  title: string;
  hash: string;
  size: string;
  seeders: string;
  date_uploaded: string;
  requested_query?: string;
  media_info: QBTMediaInfo
  name: string;
}

export interface QBTMediaInfo {
  imdb_id?: string;
  subtitle_languages: string[];
  audio_languages: string[];
  HDR?: boolean;
  '10bit_color': boolean;
  resolution: string;
  encoding: string;
  audio_channels: string;
}

export interface QBTMediaRequest {
  bestTorrentBy: string;
  minSeeders: number;
  minResolution: string;
  query: string;
}

export interface QBTMediaDownloadInfo {
  name: string;
  hash: string;
  progress: number;
  state: string;
  download_speed_kbyte: number;
  upload_speed_kbyte: number;
  eta_in_seconds?: number;
  media: QBTMedia;
  download_started_timestamp_readable: string;
  download_started_timestamp: string;
}
