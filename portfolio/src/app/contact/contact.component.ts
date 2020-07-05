import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  now:Date;
  url = "https://in.linkedin.com/in/ganesh-bhagavath-b5208358";
  constructor() { 
    setInterval(() => {
      this.now = new Date()}, 1);
  }

  ngOnInit(): void {
  }

  sendMessage(form: NgForm) {
    console.log(form);
    const value = form.value;
    console.log(value.fName);
    console.log(value.lName);
    console.log(value.email);
    console.log(value.phoneNumber);
    console.log(value.message);
    var notify = document.getElementById("notifySuccess");
    notify.style.display = "block";
    var thankyou = document.getElementById("thankyou");
    thankyou.style.display = "block";
    form.reset();
    setTimeout( () => { 
      thankyou.style.animation = "mainFadeOut 6s forwards";
     }, 3000 );
     
  }

  onClear(form: NgForm) {
    form.reset();
  }
}
