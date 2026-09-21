import { Header } from '$components/header/header';
import { LanyardService } from '$services/lanyard.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollText } from './directives/scroll-text.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ScrollText],
  templateUrl: './app.html',
})
export class App {
  private readonly _lanyard: LanyardService = inject(LanyardService);
  protected readonly userId: string = this._lanyard.userId;
}
