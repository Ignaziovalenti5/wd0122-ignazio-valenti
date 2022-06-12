import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrlMovies:string = 'http://localhost:4201/movies/';
  apiUrlFavoriteMovies:string = 'http://localhost:4201/favorites/';

  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get(this.apiUrlMovies)
  }

  deleteFavoriteMovie(id:number){    
    return this.http.delete(this.apiUrlFavoriteMovies + '/' + id)
  }

  getFavoriteMovies(){
    return this.http.get(this.apiUrlFavoriteMovies)
  }

  registerFavoriteMovie(movie:any){
    return this.http.post(this.apiUrlFavoriteMovies, movie)
  }


}
