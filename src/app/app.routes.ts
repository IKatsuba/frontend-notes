import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './news-page#NewsPageModule'
  },
  {
    path: 'about',
    loadChildren: './about-page#AboutPageModule'
  }
];
