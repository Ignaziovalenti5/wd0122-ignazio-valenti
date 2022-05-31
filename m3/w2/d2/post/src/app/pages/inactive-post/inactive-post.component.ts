import { Component, OnInit } from '@angular/core';
import { getPosts } from 'src/app/post.service';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent implements OnInit {

  post:Post[] = []

  constructor() { 
    getPosts()
    .then(res => {
      
      this.post = res.filter((p:Post) => {
        return !(p.active)
      })

    })
    
  }

  ngOnInit(): void {
  }

}
