import { Component, OnInit } from '@angular/core';
import { getPosts } from 'src/app/post.service';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {

  post:Post[] = []

  constructor() { 
    getPosts()
    .then(res => {
      
      this.post = res.filter((p:Post) => {
        return p.active
      })

    })
    
  }

  ngOnInit(): void {
  }

}
