import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

type Country = {
  countryName: string,
}

type State = {
  stateName: string,
}

type District = {
  districtName: string,
}

type RegForm = {
  id: number,
  firstName: string,
  middleName: string,
  lastName: string,
  fatherName: string,
  dob: Date,
  gender: string,
  email: string,
  mobNum: number,
  address: string,
  country: string,
  state: string,
  district: string
}

@Component({
  selector: 'app-registation-info',
  templateUrl: './registation-info.component.html',
  styleUrls: ['./registation-info.component.scss']
})
export class RegistationInfoComponent implements OnInit {
  title: string = "Student Registration Form";
  typeName: string = "text";
  fName: string = "";
  mName: string = "";
  lName: string = "";
  aName: string = "";
  dateOfBirth: string = "";
  gender: string = "";
  email: string = "";
  typeName1: Array<number> = [];
  num: string = "";
  country: string = "";
  data: any = [];
  countryName: Array<Country> = [];
  stateDiv: string = "";
  stateName: Array<State> = [];
  districtDiv: string = "";
  districtName: Array<District> = [];
  info: string = "";
  validate: string = "";
  validate1: string = "";
  container: Array<RegForm> = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService
    this.countryName = this.dataService.getCountryNames();
    this.stateName = this.dataService.getStateNames();
    this.districtName = this.dataService.getDistrictNames();
  }
  onClick() {
    if (this.fName == "" && this.lName == "" && this.aName == "" && this.dateOfBirth == "" && this.email == "" && this.gender == "" && this.num == "" && this.info == "") {
      this.validate = "Enter required Field";
    }
    if (this.mName == "") {
      this.validate1 = "optional";
    }
  }
}
