import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Photo } from 'src/app/classes/photo';
import { PhotosService } from 'src/app/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  loading:boolean = false
  count:number = 0
  photos:Photo[] = []
  favoritePhoto = new Subject()

  constructor(private servicePhoto:PhotosService) { }


  ngOnInit(){
    
    this.fetchPhotos()
    
  }


  fetchPhotos(){
    this.loading = true
    this.servicePhoto.getPhotos()
    .subscribe((res:Photo[]) => {

      this.loading = false
      this.photos = res
      
    });
  }


  eliminaPhoto(id:number){
    this.servicePhoto.deletePhoto(id)
    .subscribe(res => {
      this.photos = this.photos.filter(p => p.id != id)
      
    })
  }


  miPiacePhoto(){
    this.servicePhoto.likePhoto()
    
    this.favoritePhoto.next(this.count++)
    
  }

  

}
