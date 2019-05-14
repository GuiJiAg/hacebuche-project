import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  currentDate: any = new Date();

  year: any = this.currentDate.getFullYear();
  month: any = this.currentDate.getMonth() + 1;
  day: any = this.currentDate.getDate();

  constructor() { }

  ngOnInit() {
    this.checkDate()
  }

  checkDate() {
    if (this.month<10) {
      this.month = `0${this.month}`;
    }
    if (this.day<10) {
      this.day = `0${this.day}`;
    }

    this.currentDate = `${this.year}-${this.month}-${this.day}`;
  }
}
