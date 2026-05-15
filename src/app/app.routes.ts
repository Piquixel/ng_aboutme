import { Routes } from '@angular/router';
import { About } from 'pages/about/about';
import { Contact } from 'pages/contact/contact';
import { Landing } from 'pages/landing/landing';
import { Projects } from 'pages/projects/projects';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Accueil',
    component: Landing,
  },
  {
    path: 'projects',
    title: 'Projets',
    component: Projects,
  },
  {
    path: 'about',
    title: 'A Propos',
    component: About,
  },
  {
    path: 'contact',
    title: 'Me Contacter',
    component: Contact,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
