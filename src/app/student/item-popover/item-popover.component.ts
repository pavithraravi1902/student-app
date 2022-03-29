import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Student } from '../services/student.service';

@Component({
  selector: 'app-item-popover',
  templateUrl: './item-popover.component.html',
  styleUrls: ['./item-popover.component.scss']
})
export class ItemPopoverComponent implements OnInit, OnChanges {

  @Input() data: Student = {} as Student;

  isActive = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let change = changes[propName];

      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;
      console.log(changeLog);

    }
  }

  ngOnInit(): void {
  }

  public toggle(): void {
    this.isActive = !this.isActive;
  }

}
