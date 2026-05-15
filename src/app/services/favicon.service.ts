import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FaviconService {
  private readonly _baseUrl: string =
    'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=';
  private readonly _baseSize: number = 32;

  public getFavicon(url: string): string {
    return `${this._baseUrl}${url}&size=${this._baseSize}`;
  }
}
