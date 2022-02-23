import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
type Syllabus = {
  subName: string,
  subCode: string
}
@Component({
  selector: 'app-exam-info',
  templateUrl: './exam-info.component.html',
  styleUrls: ['./exam-info.component.scss']
})
export class ExamInfoComponent implements OnInit {
  public title: string = "April 2022 Examination Time Table"
  public sub: Array<Syllabus> = [];
  public major: any = ["Algebra", "Trignometry", "Differential Equation"];
  public allied: any = ["Financial Accounting", "Cost Accounting"];
  public week: Array<string> = [];
  public booleanVal: boolean = this.commodity();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.sub = this.dataService.getSubjectData();
    this.week = this.dataService.getWeekDays();
  }
  commodity(): any {
    if (this.sub.filter((value) => value.subName == "Alegbra")) {
      return this.booleanVal = true;
    } else if (this.sub.filter((value) => value.subName == "Trignometry")) {
      return this.booleanVal = true;
    } else if (this.sub.filter((value) => value.subName == "Differential Equation")) {
      return this.booleanVal = true;
    } else if (this.sub.filter((value) => value.subName == "Financial Accounting")) {
      return this.booleanVal = false;
    } else if (this.sub.filter((value) => value.subName == "Cost Accounting")) {
      return this.booleanVal = false;
    }
  }
}
