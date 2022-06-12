import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Auth } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiUrlLogin:string = 'http://localhost:4201/login';

  login(authData:Auth) {
    return this.http.post(this.apiUrlLogin, authData).pipe(
      tap((res) => {
        localStorage.setItem("user", JSON.stringify(res))
      })
    )
  }

  logUser(token:string){
    localStorage.setItem('token',token)
  }

  logout():boolean{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  isUserLogged(){
    return localStorage.getItem('token') != null
  }




}
