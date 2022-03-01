import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Student = {
  regNo: number;
  name: string;
  age: number;
  dept: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>("http://localhost:3000/students", {});
  }

  public getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`http://localhost:3000/students/${id}`, {});
  }

  public removeStudentById(id: number) {
    return this.http.delete(`http://localhost:3000/students/${id}`, {});
  }

  // to-do
  // Update using PUT / PATCH(need not to consider by now)
  
  public addStudent(student: Student) {
    // Create using POST
  }
}
