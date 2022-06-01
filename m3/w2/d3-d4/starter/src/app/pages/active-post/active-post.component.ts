import { Component, OnInit } from '@angular/core';
import { getPosts } from 'src/app/post.service';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {

  posts:Post[] = []

  constructor() { 
    
  }

  ngOnInit(): void {

    this.posts = getPosts().filter(post => post.active)
    
  }

  activatePost(post:Post){
    
    post.active = !post.active
    this.posts = getPosts().filter(post => post.active)

    
  }

  

}
