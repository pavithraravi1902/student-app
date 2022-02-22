import { Injectable } from '@angular/core';
type Student = {
  Firstname: string,
  Lastname: string,
  Age: number,
  EmailId: string
}

type Syllabus = {
  subName: string,
  subCode: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public studentData1: Array<Student> = [{ Firstname: "pavithra", Lastname: "Ravi", Age: 21, EmailId: "pavithraravi1902@gmail.com" }];
  public studentData2: Array<Student> = [{ Firstname: "Yamuna", Lastname: "Ravi", Age: 18, EmailId: "yamunaravi2801@gmail.com" }];
  public studentData3: Array<Student> = [{ Firstname: "Thrisha", Lastname: "Jasmine", Age: 18, EmailId: "thrishajasmine0907@gmail.com" }];
  public studentData4: Array<Student> = [{ Firstname: "Devi", Lastname: "Priya", Age: 16, EmailId: "Devipriya2801@gmail.com" }];
  public subjectData = [
    { subName: "Algebra", subCode: "TAM1A" },
    { subName: "Trignometry", subCode: "TAM2A" },
    { subName: "Differential Equation", subCode: "TAM3A" },
    { subName: "Financial Accounting", subCode: "SPAM1" },
    { subName: "Cost Accounting", subCode: "SPAM2" }];

  constructor() { }
}
