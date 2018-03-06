import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {PopularFilmsComponent} from './film/popular-films/popular-films.component';


export const ROUTES: Routes = [
  {path: '', component: PopularFilmsComponent, pathMatch: 'full'},
  {path: 'popular-films', component: PopularFilmsComponent},
  {path: '**', component: NotFoundComponent}
];
