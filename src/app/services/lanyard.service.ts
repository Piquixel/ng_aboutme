import { Injectable, OnDestroy } from '@angular/core';
import { LanyardData, LanyardMessage } from 'interfaces/landyard.interface';
import { BehaviorSubject, Observable, Subscription, timer } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class LanyardService implements OnDestroy {
  public readonly userId: string = '383187323963047936';
  private socket$?: WebSocketSubject<LanyardMessage>;
  private _heartbeatSub?: Subscription;

  private _userData$ = new BehaviorSubject<LanyardData | null>(null);
  public userData$: Observable<LanyardData | null> = this._userData$.asObservable();

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket$ = webSocket('wss://api.lanyard.rest/socket');

    this.socket$.subscribe({
      next: msg => this.handleMessage(msg),
      error: err => {
        console.error('Lanyard Connection Error:', err);
        this.cleanup();
        timer(5000).subscribe(() => this.connect());
      },
    });
  }

  private handleMessage(msg: LanyardMessage) {
    switch (msg.op) {
      case 1:
        this.startHeartbeat(msg.d.heartbeat_interval);
        this.socket$?.next({
          op: 2,
          d: { subscribe_to_id: this.userId },
        });
        break;

      case 0:
        if (msg.t === 'INIT_STATE' || msg.t === 'PRESENCE_UPDATE')
          this._userData$?.next(msg.d as LanyardData);
        break;
    }
  }
  private startHeartbeat(ms: number) {
    this._heartbeatSub?.unsubscribe();
    this._heartbeatSub = timer(0, ms).subscribe(() => {
      this.socket$?.next({ op: 3, d: {} });
    });
  }
  private cleanup() {
    this._heartbeatSub?.unsubscribe();
    this.socket$?.complete();
  }

  ngOnDestroy() {
    this.cleanup();
  }
}
