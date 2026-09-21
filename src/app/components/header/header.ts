import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [TitleCasePipe],
  templateUrl: './header.html',
})
export class Header {
  public readonly rawLinks: string[] = ['about', 'projects', 'skills', 'education'];

  public get links(): string[] {
    return this.rawLinks.map((link: string): string => '/' + link);
  }
}
