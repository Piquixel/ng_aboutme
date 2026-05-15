import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from 'components/header/header';
import { LanyardService } from 'services/lanyard.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly _lanyard: LanyardService = inject(LanyardService);
  protected readonly userId: string = this._lanyard.userId;
}
