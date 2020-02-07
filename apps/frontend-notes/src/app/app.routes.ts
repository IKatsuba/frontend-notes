import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./news-page').then(m => m.NewsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about-page').then(m => m.AboutPageModule)
  }
];
