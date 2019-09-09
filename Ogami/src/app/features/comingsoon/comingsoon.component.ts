import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss']
})
export class ComingsoonComponent implements OnInit {
  public countDownDate = new Date('Jan 1, 2020 00:00:00').getTime();
  // Cache all countdown boxes into consts
  countdownDays = document.querySelector('.countdown__days .number');
  countdownHours = document.querySelector('.countdown__hours .number');
  countdownMinutes = document.querySelector('.countdown__minutes .number');
  countdownSeconds = document.querySelector('.countdown__seconds .number');
  public days;
  public hours;
  public minutes;
  public seconds;
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      // Get current date and time
      const currentDate = new Date().getTime();

      // Calculate the distance between current date and time and the deadline date and time
      const distance = this.countDownDate - currentDate;

      // Calculations the data for remaining days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }
}
