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
    return this.http.get<Student[]>("http://localhost:3000/students", {
      headers: {
        "x-client-key": "student-listing"
      }
    });
  }

  public getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`http://localhost:3000/students/${id}`, {});
  }

  public removeStudentById(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/students/${id}`, {});
  }

  public createData(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/students`, data);
  }

  public updateStudent(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/students/${id}`, data);
  }

  public getElementByregNo(regNo: number) {
    return this.http.get<any>(`http://localhost:3000/students?regNo=${regNo}`);
  }
 }
