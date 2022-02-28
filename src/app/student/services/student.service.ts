import { Injectable } from '@angular/core';

export type Student = {
  regNo: number;
  name: string;
  age: number;
  dept: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [];
  
  public get Students() : Student[] {
    return this.students;
  }
  
  public set Students(list : Student[]) {
    this.students = list;
  }
  
  constructor() { }
}
