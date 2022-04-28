import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Teacher } from '../service/teacher.service';

@Component({
  selector: 'app-item-popover',
  templateUrl: './item-popover.component.html',
  styleUrls: ['./item-popover.component.scss']
})
export class ItemPopoverComponent implements OnInit, OnChanges {

  @Input() data: Teacher = {} as Teacher;

  isActive: any;

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