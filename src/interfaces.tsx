export interface Media {
  title: string;
  hash: string;
  size: string;
  seeders: string;
  date_uploaded: string;
  requested_query?: string;
  media_info: MediaInfo
  name: string;
}

export interface MediaInfo {
  imdb_id?: string;
  subtitle_languages: string[];
  audio_languages: string[];
  HDR?: boolean;
  '10bit_color': boolean;
  resolution: string;
  encoding: string;
  audio_channels: string;
}

export interface MediaRequest {
  bestTorrentBy: string;
  minSeeders: number;
  minResolution: string;
  query: string;
}

export interface MediaDownloadInfo {
  name: string;
  hash: string;
  progress: number;
  state: string;
  download_speed_kbyte: number;
  upload_speed_kbyte: number;
  eta_in_seconds: number;
  media: Media;
  download_started_timestamp_readable: string;
  download_started_timestamp: string;
}
