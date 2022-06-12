import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favoriteMovies:any = []

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getFavoriteMovies().subscribe(res => {
    
      this.favoriteMovies = res
      
    })
  }

  removeFavorite(id:number){
    this.moviesService.deleteFavoriteMovie(id).subscribe()

    this.moviesService.getFavoriteMovies().subscribe(res => {
      this.favoriteMovies = res
    })
  }

}
