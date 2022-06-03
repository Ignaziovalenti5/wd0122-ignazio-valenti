import { Todo } from '../classes/todo';


let todos:Todo[] = []


export function getTodos():Promise<Todo[]>{
  
  return new Promise((resolve)=>{

    setTimeout(() => {
      resolve(todos)
    }, 2000);

  })

}


export function addNewTodo(todo:Todo):Promise<Todo[]>{
  
  if (todo) {
    todos.push(todo)
  }
  
  return getTodos()

}


export function deleteTodo(id:number): void{

  let index:number = todos.findIndex(u => u.id === id);
  todos.splice(index, 1);
  
}


