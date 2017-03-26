import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/search'},
  {
    path: 'search',
    component: SearchComponent
  },
  // {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/search'},
];
