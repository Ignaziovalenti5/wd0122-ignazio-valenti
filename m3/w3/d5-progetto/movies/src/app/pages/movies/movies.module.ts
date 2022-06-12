import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
  declarations: [
    MoviesComponent,
    HeaderComponent,
    FooterComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MoviesModule { }
