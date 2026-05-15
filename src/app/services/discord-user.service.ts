import { inject, Injectable } from '@angular/core';
import { LanyardService } from './lanyard.service';

@Injectable({
  providedIn: 'root',
})
export class DiscordUserService {
  private readonly _lanyard: LanyardService = inject(LanyardService);
  private readonly _userId: string = this._lanyard.userId;

  public getAvatar(userAvatar: string, size = 128): string {
    return `https://cdn.discordapp.com/avatars/${this._userId}/${userAvatar}?size=${size}`;
  }

  public getActivityThumbnail(url?: string, appId?: string, size = 128): string {
    if (!url) return '';
    if (url.startsWith('mp:')) {
      return url.replace('mp:', 'https://media.discordapp.net/');
    }
    return `https://cdn.discordapp.com/app-assets/${appId}/${url}?size=${size}`;
  }
}
