import { Repo } from '$interfaces/repo-res.interface';
import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-repo-card',
  imports: [DatePipe],
  templateUrl: './repo-card.html',
})
export class RepoCard {
  public readonly repo = input.required<Repo>();
  public readonly filter = input.required<string>();
}
