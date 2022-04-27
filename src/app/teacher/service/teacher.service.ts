import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ITeacher {
  [key: string]: string | number;
}

export interface Teacher extends ITeacher {
  id: number;
  name: string;
  age: number;
  dept: string;
  }

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  public getAllTeacher(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>("http://localhost:3000/teachers", {
      headers: {
        "x-client-key": "teacher-listing"
      }, withCredentials: true
    });
  }
  public getTeacherById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`http://localhost:3000/teachers/${id}`, {});
  }
  public removeTeacherById(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/teachers/${id}`, {});
  }
  public updateTeacher(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/teachers/${id}`, data);
  }
  public createData(data: Teacher): Observable<any> {
    return this.http.post(`http://localhost:3000/teachers`, data);
  }
}