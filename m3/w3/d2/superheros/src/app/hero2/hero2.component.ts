import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  styleUrls: ['./hero2.component.scss']
})
export class Hero2Component implements OnInit {

  constructor(private fb:FormBuilder) { }

  form!:FormGroup;

  ngOnInit(): void {

    this.form = this.fb.group({
      name: this.fb.control('', Validators.required),
      alterEgo: this.fb.control('', Validators.required),
      powers: this.fb.array([]),
      enemy: this.fb.control('', [Validators.maxLength(10), Validators.required]),
      planet: this.fb.control('', [Validators.minLength(5), Validators.required]),
      weaknesses: this.fb.array([])
    })

  }

  addPower(){
    let power = new FormControl(null);
    (this.form.get('powers') as FormArray).push(power);
  }

  addWeakness(){
    let weakness = new FormControl(null);
    (this.form.get('weaknesses') as FormArray).push(weakness);
  }

  getPowerFields(){
    return (this.form.get('powers') as FormArray).controls
  }
  
  getWeaknessFields(){
    return (this.form.get('weaknesses') as FormArray).controls
  }

  getFormC(name:string){
    return this.form.get(name)
  }

  submit(){
    console.log(this.form)
  }

}
