import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: string = "Instruction";
  public instructions: Array<string> = ["Enter valid username, password", "Login into the student-login-page", "click-syllabus to know about the current syllabus details", "click previous data to refer previous year question paper", "click sem info for exam details >> 2022 Semester Exam informations"];
  constructor() { }

  ngOnInit(): void {
  }

}
