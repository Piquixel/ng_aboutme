import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { LucideBookCopy, LucideClock, LucideClockArrowUp, LucideGlobe } from '@lucide/angular';
import { Repo } from 'interfaces/repo-res.interface';

@Component({
  selector: 'app-repo-card',
  imports: [DatePipe, LucideClock, LucideClockArrowUp, LucideGlobe, LucideBookCopy],
  templateUrl: './repo-card.html',
  styleUrl: './repo-card.scss',
})
export class RepoCard {
  public readonly repo = input.required<Repo>();
  public readonly filter = input.required<string>();
}
