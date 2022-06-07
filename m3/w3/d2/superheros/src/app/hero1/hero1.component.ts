import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero1',
  templateUrl: './hero1.component.html',
  styleUrls: ['./hero1.component.scss']
})
export class Hero1Component implements OnInit {

  constructor() { }

  @ViewChild('f',{static:true}) form!:NgForm;

  ngOnInit(): void {
    this.form.statusChanges?.subscribe(status => {
      console.log(status)
    })
  }

  submit(){
    console.log(this.form)
    
  }

}
