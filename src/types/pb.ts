// Define the interface for pbTorrentSelectionCriteriaSchema
export interface PBTorrentSelectionCriteria {
  subtitle_languages?: string[];
  audio_languages?: string[];
  HDR?: boolean;
  '10bit_color'?: boolean;
  resolution?: string;
  encoding?: string;
  audio_channels?: string;
  min_seeders?: number;
  select_by?: string;
}

// Define the interface for PBMediaRequest
export interface PBMediaRequest {
  tmbd_id: string;
  media_name: string;
  media_year_released: string;
  media_type: string;
  requested_by: string;
  date_requested?: string; // Date will be in string format
  torrent_selection_criteria?: PBTorrentSelectionCriteria;
}

// Define the interface for PBTorrentInfo
export interface PBTorrentInfo {
  name: string;
  description_page_url: string;
  magnet_link: string;
  seeders: string;
  size: string;
  date_uploaded: string;
  hash: string;
}

// Define the interface for PBTorrentMediaSpecs
export interface PBTorrentMediaSpecs {
  imdb_id?: string;
  subtitle_languages: string[];
  audio_languages: string[];
  HDR: boolean;
  '10bit_color': boolean;
  resolution: string;
  encoding: string;
  audio_channels: string;
}

// Define the interface for PBItem
export interface PBItem {
  media_request: string;
  torrent_info: string;
  torrent_media_specs: string;
  downloaded: boolean;
}