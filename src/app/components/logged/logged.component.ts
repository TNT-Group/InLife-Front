import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  constructor() { }

  public getToken() {
    return localStorage.getItem('userToken');
  }

  ngOnInit(): void {
  }

}
