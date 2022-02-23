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
  public subjectData: any = [
    { subName: "Algebra", subCode: "TAM1A" },
    { subName: "Trignometry", subCode: "TAM2A" },
    { subName: "Differential Equation", subCode: "TAM3A" },
    { subName: "Financial Accounting", subCode: "SPAM1" },
    { subName: "Cost Accounting", subCode: "SPAM2" }];
  public algebra: any = [
    { unit1: "Abelian, non-abelian group" },
    { unit2: "Rings" },
    { unit3: "Cyclic, non-cyclic subgroup" },
  ];
  public trignometry: any = [
    { unit1: "Expansion of sin theta, cos theta" },
    { unit2: "power of cos theta, sin theta" },
    { unit3: "Hyperbolic Function" },
  ];
  public differentialEquation: any = [
    { unit1: "Characteristics Equation" },
    { unit2: "Laplase Function" },
    { unit3: "Fourier series" },
  ];
  public financialAccounting: any = [
    { unit1: "Final Accounts" },
    { unit2: "Depreciation" },
    { unit3: "Partnership" },
  ];
  public costAccounting: any = [
    { unit1: "Fundamental of cost accounting" },
    { unit2: "Methods and techniques of cost accounting" },
    { unit3: "Accounting for overheads" },
  ];
  constructor() { }
  getData(): any {
    return this.subjectData;
  }
  getAlgebra() {
    return this.algebra;
  }
  getTrigno() {
    return this.trignometry;
  }
  getDiff() {
    return this.differentialEquation;
  }
  getFinancial() {
    return this.financialAccounting;
  }
  getCost() {
    return this.costAccounting;
  }
}
