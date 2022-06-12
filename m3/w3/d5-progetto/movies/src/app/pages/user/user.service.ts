import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  apiUrlRegister:string = 'http://localhost:4201/register';
  apiUrl:string = 'http://localhost:4201/users';

  registerUser(user:User) {
    return this.http.post(this.apiUrlRegister, user)
  }

  getUser(id:number) {
    return this.http.get(this.apiUrl+'/'+id)
  }

  deleteUser(id:number){
    return this.http.delete(this.apiUrl + '/' + id)
  }

}
