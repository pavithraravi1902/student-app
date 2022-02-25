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
export type Unit = {
  unit: string,
}
export type Country = {
  countryName: string,
}

export type State = {
  stateName: string,
}

export type District = {
  districtName: string,
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
  public algebra: Array<Unit> = [
    { unit: "Abelian, non-abelian group" },
    { unit: "Rings" },
    { unit: "Cyclic, non-cyclic subgroup" },
  ];
  public trignometry: Array<Unit> = [
    { unit: "Expansion of sin theta, cos theta" },
    { unit: "power of cos theta, sin theta" },
    { unit: "Hyperbolic Function" },
  ];
  public differentialEquation: Array<Unit> = [
    { unit: "Characteristics Equation" },
    { unit: "Laplase Function" },
    { unit: "Fourier series" },
  ];
  public financialAccounting: Array<Unit> = [
    { unit: "Final Accounts" },
    { unit: "Depreciation" },
    { unit: "Partnership" },
  ];
  public costAccounting: Array<Unit> = [
    { unit: "Fundamental of cost accounting" },
    { unit: "Methods and techniques of cost accounting" },
    { unit: "Accounting for overheads" },
  ];
  public weekDays: Array<string> = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  public countryNames: Array<Country> = [
    { countryName: "India" },
    { countryName: "America" },
    { countryName: "china" },
    { countryName: "Russia" },
    { countryName: "England" },
    { countryName: "Canada" },
    { countryName: "Germany" },
    { countryName: "Brazil" },
    { countryName: "Japan" },
    { countryName: "Australia" },
    { countryName: "UAE" }
  ];
  public stateName: Array<State> = [
    { stateName: "Tamilnadu" },
    { stateName: "Kerala" },
    { stateName: "Gujarat" },
    { stateName: "Bihar" },
    { stateName: "Uttar Pradhesh" },
    { stateName: "Maharastra" },
    { stateName: "Madhyapradesh" },
    { stateName: "Andhrapradesh" },
    { stateName: "Punjab" },
    { stateName: "Haryana" },
    { stateName: "Rajasthan" },
    { stateName: "Jammu & Kashmir" }];
    public districtName: Array<District> = [
      {districtName: "Chennai"},
      {districtName: "Coimbatore"},
      {districtName: "Madurai"},
      {districtName: "Trichy"},
      {districtName: "Kancheepuram"},
      {districtName: "Tiruvallur"},
      {districtName: "Tirupur"},
      {districtName: "Erode"},
      {districtName: "Nilgris"},
      {districtName: "Vilupuram"},
      {districtName: "Vellore"},
      {districtName: "Ranipet"},
      {districtName: "Chengalpet"},
      {districtName: "Ariyalur"}
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
  getSubjectData() {
    return this.subjectData;
  }
  getWeekDays() {
    return this.weekDays;
  }
  getCountryNames() {
    return this.countryNames;
  }
  getStateNames() {
    return this.stateName;
  }
  getDistrictNames() {
    return this.districtName;
  }
}
