import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

export class TopNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) 
  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > 700) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }
}
