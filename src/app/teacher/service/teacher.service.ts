import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Teacher = {
  regNo: number;
  name: string;
  age: number;
  dept: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  public getAllTeacher(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>("http://localhost:3000/teachers", {});
  }

}