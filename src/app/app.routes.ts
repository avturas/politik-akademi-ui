import { Routes } from '@angular/router';
import { ContentList } from './components/content-list/content-list';
import { ContentPage } from './content-page/content-page';

export const routes: Routes = [
  { path: '', redirectTo: 'dersler', pathMatch: 'full' },
  { path: 'dersler', component: ContentList },
  { path: 'ders/:slug', component: ContentPage },
];
