import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  { 
    path: '',
    component: MoviesComponent
  },
  {
    path: 'favorites',
    component:FavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
