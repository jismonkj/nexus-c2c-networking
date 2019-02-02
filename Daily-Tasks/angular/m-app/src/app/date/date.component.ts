import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor() { 

  }
  date:string = new Date().toDateString()
  message:string
  someNumber:number = 12;


  ngOnInit() {

  }



}
