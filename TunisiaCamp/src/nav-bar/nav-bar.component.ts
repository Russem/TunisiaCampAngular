import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Get the menu element
    const burgerToggle = document.querySelector('.menu');

    if (burgerToggle) {
      // Attach the click event handler for toggling the menu
      burgerToggle.addEventListener('click', this.toggleMenu);
    }
  }

  toggleMenu() {
    const showElement = document.querySelector('#show');
    const hamburgerElement = document.querySelector('.hamburger');

    if (showElement) {
      showElement.classList.toggle('show');
    }

    if (hamburgerElement) {
      hamburgerElement.classList.toggle('close');
    }
  }
}
