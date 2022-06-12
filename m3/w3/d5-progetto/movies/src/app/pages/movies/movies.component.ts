import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  
  
  movies:any = []


  constructor(private moviesService:MoviesService) {}
  
  ngOnInit(): void {
    
    this.moviesService.getMovies().subscribe(res => {
    
      this.movies = res
      
    })
    
  }

  setFavorite(movie:any){
    this.moviesService.registerFavoriteMovie(movie).subscribe()
  }


}
