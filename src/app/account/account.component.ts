import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  acc_img: string = 'assets/image/Griffith-university.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
