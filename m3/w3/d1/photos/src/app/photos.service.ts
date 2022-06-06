import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './classes/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  apiUrl:string = 'https://jsonplaceholder.typicode.com/photos'

  photos!:Photo[]

  constructor(private http:HttpClient) { }

  getPhotos(){
    return this.http.get<Photo[]>(this.apiUrl)
    
  }

  deletePhoto(id:number){
    return this.http.delete<Photo>(this.apiUrl + '/' + id)
  }

  likePhoto(){
    
    
  }

}
