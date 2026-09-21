import { Landing } from '$pages/landing/landing';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Front-end Student',
    component: Landing,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
