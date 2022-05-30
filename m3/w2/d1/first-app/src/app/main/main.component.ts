import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  nomiUtenti:string[] = []
  
  ngOnInit(): void {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {

      for(let userNome of res){
        this.nomiUtenti.push(userNome.name)
      }
      
    })
  }

  elimina(n:string):void{
    let index:number = this.nomiUtenti.indexOf(n)
    this.nomiUtenti.splice(index, 1)
  }

  aggiungi():void{
    
    let newName:string = document.querySelector('input')!.value

    if(newName){
      this.nomiUtenti.push(newName)
    }else{
      alert('Inserisci un nome da aggiungere alla lista!')
    }

    document.querySelector('input')!.value = ''

  }

}
