import { Component, OnInit } from '@angular/core';
import { getPosts } from 'src/app/post.service';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent implements OnInit {

  posts:Post[] = []
  visible:boolean = false

  constructor() {     
      
  }

  ngOnInit(): void {

    this.posts = getPosts().filter(post => !post.active)
    
  }

  activatePost(post:Post){
    
    post.active = !post.active
    this.posts = getPosts().filter(post => !post.active)
    
  }

}
