import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  user_login: Ulogin = new Ulogin();

  constructor(private http: HttpClient) {
    this.http = http;
  }

  login(email: string, password: string) {
    var respose = this.http.get(
      `http://localhost:3000/api/auth?email=${email}&password=${password}`
    );
    return respose;
  }
  checkemailandpassword(email: string, password: string) {
    return this.login(email, password);
  }
}
export class Ulogin {
  email: string;
  password: string;
}
