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
  public allied: Array<string> = ["Financial Accounting", "Cost Accounting"];
  public week: Array<string> = [];
  public data: any = [];
  public myDate: any = Date.now();
  public booleanVal: boolean = this.commodity();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.sub = this.dataService.getSubjectData();
    this.week = this.dataService.getWeekDays();
  }
  commodity(): any {
    /*if(this.data=this.sub.filter((value)=>this.major.includes(value))){
      this.booleanVal=true;
    }else{
      this.booleanVal=false;
    }*/
    for (let i = 0; i < this.sub.length; i++) {
      for (let j = 0; j < this.major.length; j++) {
        if (this.sub[i] == this.major[j]) {
          return this.booleanVal = true;
        } else {
          return this.booleanVal = false;
        }
      }
    }
  }
}
