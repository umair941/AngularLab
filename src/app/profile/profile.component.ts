import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MyserviceService],
})
export class ProfileComponent implements OnInit {
  user_login: Ulogin = new Ulogin();
  // constructor(private service: MyserviceService, private routes: Router) {}
  // msg: string;

  // ngOnInit(): void {}
  // check(
  //   name: string,
  //   date: string,
  //   age: string,
  //   email: string,
  //   password: string
  // ) {
  //   // var output=this.service.checkusername,date,age,emailandpassword(name,date,age,email,password);
  //   var output: boolean = true;

  //   let user = {};
  //   this.service
  //     .checkusernameanddateandageandemailandpassword(
  //       name,
  //       date,
  //       age,
  //       email,
  //       password
  //     )
  //     .subscribe((res) => {
  //       debugger;
  //       if (res) {
  //         this.routes.navigate(['/account']);
  //       } else {
  //         this.msg = 'Invalid field';
  //       }
  //     });
  // }

  constructor(private router: Router) {}

  ngOnInit(): void {}
  LogIn() {
    debugger;
    if (
      (this.user_login.name == 'lana' &&
        this.user_login.date == '8/22/2021' &&
        this.user_login.age == '12' &&
        this.user_login.email == 'lana@gmail.com' &&
        this.user_login.password == '000') ||
      (this.user_login.name == 'lana' &&
        this.user_login.date == '8/22/2021' &&
        this.user_login.age == '12' &&
        this.user_login.email == 'umair@gmail.com' &&
        this.user_login.password == '000') ||
      (this.user_login.name == 'lana' &&
        this.user_login.date == '8/22/2021' &&
        this.user_login.age == '12' &&
        this.user_login.email == 'imtiaz@gmail.com' &&
        this.user_login.password == '000')
    ) {
      this.router.navigateByUrl('/account');
    } else {
      console.log('invalid field');
      alert('invalid field');
    }
  }
}
export class Ulogin {
  name: string;
  date: string;
  age: string;
  email: string;
  password: string;
}

// if (
//   (this.user_login.email == 'lana@gmail.com' &&
//     this.user_login.password == '000') ||
//   (this.user_login.email == 'umair@gmail.com' &&
//     this.user_login.password == '000') ||
//   (this.user_login.email == 'imtiaz@gmail.com' &&
//     this.user_login.password == '000')
// ) {
//   this.router.navigateByUrl('/account');
// } else {
//   console.log('invalid username or password');
//   alert('invalid username or password');
// }