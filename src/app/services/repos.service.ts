import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Repo } from 'interfaces/repo-res.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  private readonly _baseUrl: string = 'https://api.github.com/users/Piquixel/repos';
  private http = inject(HttpClient);

  public getRepos(filter?: string) {
    const repos = this.http.get<Repo[]>(this._baseUrl);
    if (!filter) return repos;
    return repos.pipe(map(repos => repos.filter(r => r.topics.includes(filter))));
  }

  public log() {
    return this.getRepos().subscribe(res => console.log(res));
  }
}
