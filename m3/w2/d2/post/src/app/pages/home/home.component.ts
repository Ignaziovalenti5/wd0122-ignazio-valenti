import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private r:Router) { }

  ngOnInit(): void {
  }

  goToPost(b:boolean){
    if (b) {
      this.r.navigate(['/post-attivi'])
    }else{
      this.r.navigate(['/post-inattivi'])
    }
  }

}
