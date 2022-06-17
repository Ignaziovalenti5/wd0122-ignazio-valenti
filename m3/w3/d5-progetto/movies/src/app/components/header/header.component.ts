import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/pages/user/user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name:string = ''
  viewUser:boolean = false
  user:any

  constructor(private auth:AuthService,
  private router:Router,
  private userService:UserService
  ) { }

  ngOnInit(): void {
      
      this.getUserName()
          
  }

  getUserName(){
    let user:any = localStorage.getItem('user')
    this.name = JSON.parse(user).user.first_name
    this.user = JSON.parse(user).user
  }

  logout(){

    this.auth.logout();
    this.router.navigate(['/'])
  
  }

  goToUserPage(){
    this.viewUser = !this.viewUser
  }


  deleteAccount(id:number){
    this.userService.deleteUser(id).subscribe()
    this.router.navigate([''])
  }



}
