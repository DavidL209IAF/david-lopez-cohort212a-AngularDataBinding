import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from './patient.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

//name entered in login box from main app.component
@Input() createdBy: string = '';
@Output() removePatientNotification = new EventEmitter();
@Output() addedPatientNotification = new EventEmitter();

//for add patient form
firstName: string = '';
lastName: string = '';
email: string = '';
phone: string = '';
//for add patient form

//for edit patient form
firstNameEdit: string = '';
lastNameEdit: string = '';
emailEdit: string = '';
phoneEdit: string = '';
//for edit patient form

beingEdited: number = -1;
patientList: Patient[] = [
  new Patient('David', 'Lopez', 'fakeemail@test.com', '1111111111', 'Admin'),
  new Patient('John', 'Doe', 'jdoe@test.com', '2222222222', 'Admin')
];

resetFields(){
  this.firstName = '';
  this.lastName = '';
  this.email = '';
  this.phone = '';
}

addPatient(){
  this.patientList.push(new Patient(this.firstName, this.lastName, this.email, this.phone, this.createdBy));
    this.resetFields();
    this.addedPatientNotification.emit(this.firstName);
}

removePatient(i: number){
  console.log(i);
  this.removePatientNotification.emit(this.patientList[i].firstName);
  this.patientList.splice(i,1);
}

editPatient(i: number){
  this.beingEdited = i;
  this.firstNameEdit = this.patientList[i].firstName;
  this.lastNameEdit = this.patientList[i].lastName;
  this.phoneEdit = this.patientList[i].phone;
  this.emailEdit = this.patientList[i].email;
}

savePatient(i: number){
  this.patientList[i].firstName = this.firstNameEdit;
  this.patientList[i].lastName = this.lastNameEdit;
  this.patientList[i].email = this.emailEdit;
  this.patientList[i].phone = this.phoneEdit;
  this.beingEdited = -1;
}
  constructor() { }

  ngOnInit(): void {
  }

}
