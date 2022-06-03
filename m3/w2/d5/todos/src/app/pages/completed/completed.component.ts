import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { deleteTodo, getTodos } from 'src/app/services/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  todos:Todo[] = []
  loading:boolean = false
  noTodo!:boolean


  constructor() { }

  serviceGetTodos() :void{
    this.loading = !this.loading

    getTodos().then(res =>{
      this.todos = res.filter(todo => todo.completed)
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

  findTodo(todo:Todo){

    let id:number = todo.id

    deleteTodo(id)
    this.serviceGetTodos()
    
  }

}


