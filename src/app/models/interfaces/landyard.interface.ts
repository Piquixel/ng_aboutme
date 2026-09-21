export interface LanyardData {
  discord_user: DiscordUser;
  activities: Activity[];
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
  spotify?: SpotifyData;
}

export interface Activity {
  name: string;
  type: number;
  url?: string;
  details?: string;
  state?: string;
  application_id?: string;
  timestamps?: {start?: number; end?: number};
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
}

export interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  global_name?: string;
  primary_guild?: string;
}

export interface LanyardMessage {
  op: number;
  t?: string;
  d: any;
}

export interface SpotifyData {
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
  timestamps: {
    end: number;
    start: number;
  };
  track_id: string;
}
