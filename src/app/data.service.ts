import { Injectable } from '@angular/core';
type Student = {
  Firstname: string,
  Lastname: string,
  Age: number,
  EmailId: string
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public studentData1: Array<Student> = [{ Firstname: "pavithra", Lastname: "Ravi", Age: 21, EmailId: "pavithraravi1902@gmail.com" }];
  public studentData2: Array<Student> = [{ Firstname: "Yamuna", Lastname: "Ravi", Age: 18, EmailId: "yamunaravi2801@gmail.com" }];
  public studentData3: Array<Student> = [{ Firstname: "Thrisha", Lastname: "Jasmine", Age: 18, EmailId: "thrishajasmine0907@gmail.com" }];
  public studentData4: Array<Student> = [{Firstname: "Devi", Lastname:"Priya", Age:16, EmailId:"Devipriya2801@gmail.com"}]
  constructor() { }
}
