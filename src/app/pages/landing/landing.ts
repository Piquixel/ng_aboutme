import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideArrowRight,
  LucideCopy,
  LucideMapPin,
  LucideMouse,
  LucideTextSearch,
} from '@lucide/angular';
import { RepoCard } from 'components/repo-card/repo-card';
import { Repo } from 'interfaces/repo-res.interface';
import { Observable } from 'rxjs';
import { DiscordUserService } from 'services/discord-user.service';
import { FaviconService } from 'services/favicon.service';
import { LanyardService } from 'services/lanyard.service';
import { RepoService } from 'services/repos.service';

interface Link {
  url: string;
  name: string;
}

@Component({
  selector: 'app-landing',
  imports: [
    AsyncPipe,
    TitleCasePipe,
    LucideArrowRight,
    LucideTextSearch,
    RouterLink,
    LucideMapPin,
    LucideCopy,
    RepoCard,
    LucideMouse,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  private readonly _lanyard: LanyardService = inject(LanyardService);
  // public readonly userId: string = this._lanyard.userId;
  public readonly userData$ = this._lanyard.userData$;

  public readonly links: Link[] = [
    {
      url: 'https://github.com/Piquixel',
      name: 'github',
    },
    {
      url: 'https://www.linkedin.com/in/thomas-fetu-b498ba355/',
      name: 'linkedin',
    },
  ];

  public readonly userService = inject(DiscordUserService);
  public readonly faviconService: FaviconService = inject(FaviconService);
  public readonly repoFilters = ['school-project', 'experiment', 'archive'];
  private repoService = inject(RepoService);
  public schoolRepos$!: Observable<Repo[]>;
  public experimentRepos$!: Observable<Repo[]>;
  public archiveRepos$!: Observable<Repo[]>;

  constructor() {
    this.repoService.log();
    effect(() => {
      this.schoolRepos$ = this.repoService.getRepos(this.repoFilters[0]);
      this.experimentRepos$ = this.repoService.getRepos(this.repoFilters[1]);
      this.archiveRepos$ = this.repoService.getRepos(this.repoFilters[2]);
    });
  }

  public async copyToClipboard(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error);
    }
  }
  public readonly email: string = 'thomas.fetu2004@gmail.com';
}
