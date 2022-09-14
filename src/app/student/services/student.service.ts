import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Student = {
  id: number;
  reg_no: number;
  username: string;
  age: number;
  dept: string; 
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
   }
   apiUrl="http://localhost:3000/student";
  public getAllStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {
      headers: {
        "x-client-key": "student-listing"
      }
    });
  }

  
  public getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`http://localhost:3000/student/${id}`, {});
  }

  public removeStudentById(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/student/${id}`, {});
  }

  public createData(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/student`, data);
  }

  public updateStudent(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/student/${id}`, data);
  }

  public getByRegNo(regNo: number) {
    return this.http.get<any>(`http://localhost:3000/students?regNo=${regNo}`);
  }
}
