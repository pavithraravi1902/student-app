import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'student-app';

  constructor() {
  }
  @HostListener('window:beforeunload', ['$event'])
  onClose(event: any): void {
    event.preventDefault();
    event.returnValue = false;
  }
}
