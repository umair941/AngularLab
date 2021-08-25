import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_login: Ulogin = new Ulogin();

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  LogIn() {
    if (
      (this.user_login.email == 'lana@gmail.com' &&
        this.user_login.password == '000') ||
      (this.user_login.email == 'umair@gmail.com' &&
        this.user_login.password == '000') ||
      (this.user_login.email == 'imtiaz@gmail.com' &&
        this.user_login.password == '000')
    ) {
      this.router.navigateByUrl('/account');
    } else {
      console.log('invalid username or password');
      alert('invalid username or password');
    }
  }
}
export class Ulogin {
  email: string;
  password: string;
}
