import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Auth } from 'src/app/interfaces/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.auth.logout()
  }

  authData:Auth = {
    email : '',
    password : ''
  }

  login(){
    this.auth.login(this.authData).subscribe((res:any) => {
      
      this.auth.logUser(res.accessToken)
      this.router.navigate(['/movies'])
      
    })

  }

  goToRegisterPage(){
    this.router.navigate(['/register'])
  }

}
