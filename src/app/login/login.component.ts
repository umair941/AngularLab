import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user_login: Ulogin = new Ulogin();

  // constructor(
  //   private router:Router
  // ) { }

  // ngOnInit(): void {
  // }
  // LogIn() {
  //   if (
  //     (this.user_login.email == 'lana@gmail.com' &&
  //       this.user_login.password == '000') ||
  //     (this.user_login.email == 'umair@gmail.com' &&
  //       this.user_login.password == '000') ||
  //     (this.user_login.email == 'imtiaz@gmail.com' &&
  //       this.user_login.password == '000')
  //   ) {
  //     this.router.navigateByUrl('/account');
  //   } else {
  //     console.log('invalid username or password');
  //     alert('invalid username or password');
  //   }
  // }
  constructor(private service: MyserviceService, private routes: Router) {}
  msg: string;

  ngOnInit(): void {}
  check(email: string, password: string) {
    // var output=this.service.checkemailandpassword(email,password);
    var output: boolean = true;

    let user = {};
    this.service.checkemailandpassword(email, password).subscribe((res) => {
      // debugger;
      if (res) {
        this.routes.navigate(['account']);
      } else {
        this.msg = 'Invalid field';
      }
    });
  }
}
export class Ulogin {
  email: string;
  password: string;
}
