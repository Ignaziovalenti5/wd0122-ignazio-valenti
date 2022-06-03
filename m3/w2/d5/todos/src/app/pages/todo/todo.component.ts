import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { addNewTodo, getTodos } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos:Todo[] = []
  loading:boolean = false
  
  todo:string = ''
  completed:boolean = false
  noTodo!:boolean

  
  constructor(){
  }

  serviceGetTodos() :void{
    this.loading = !this.loading
    
    getTodos().then(res =>{
      this.todos = res.filter(todo => !todo.completed)
      this.loading = !this.loading

      if (this.todos.length == 0) {
        this.noTodo = true
      }else{
        this.noTodo = false
      }
    })

  }
  
  ngOnInit(): void {
    this.serviceGetTodos()
  }
  
  addTodo(): void{
    let id:number = Math.floor(Math.random()*100000 +1)

    if(this.todo){
      let newTodo:Todo = new Todo(id++, this.todo, false)
      addNewTodo(newTodo)
      this.serviceGetTodos()
      this.todo = ''
    }
    
  }
  
  setCompleted(todo:Todo):void{
    todo.completed = true
    this.serviceGetTodos()
  }
  
}



