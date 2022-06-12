import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService:UserService,
    private auth: AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    
  }

  authData:User = {
    email : '',
    password : '',
    first_name: '',
    last_name: ''
  }

  register(){
    this.userService.registerUser(this.authData)
    .subscribe(data => {
        
        this.auth.login(this.authData).subscribe((res:any) => {
          
          this.auth.logUser(res.accessToken)
          this.router.navigate(['/movies'])
        })
    
      
      
    })
  }


}
