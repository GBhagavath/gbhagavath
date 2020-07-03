import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  now:string;
  constructor() { 
    setInterval(() => {
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var min = '';
      if (hours > 12) {
        hours -= 12;
      } else if (hours === 0) {
        hours = 12;
      }

      if (minutes < 10) {
        min= '0' + minutes;
      } else {
        min = minutes.toString()
      }

      this.now = hours + ':' + min}, 1);
  }

  ngOnInit(): void {
  }

}
