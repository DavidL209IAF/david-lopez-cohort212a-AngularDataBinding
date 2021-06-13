import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'david-lopez-cohort212A-angular-data-binding';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  patientNo: string ='';
  userList: any= [
    {
      patientno: 2233,
      firstname: 'David',
      lastname: 'Lopez',
      email: 'fakeemail@test.com',
      phone: 111111111
    },

    {
      patientno: 2234,
      firstname: 'John',
      lastname: 'Doe',
      email: 'jdoe@test.com',
      phone:2222222222
    }
  ];

  addUser(){
    this.userList.push({patientno: Math.floor(Math.random() * 10000), firstname : this.firstName, lastname: this.lastName, 
      email: this.email, phone: this.phone});
  
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.phone = '';
  }

  removeUser(i: any){
    console.log(i);
    this.userList.splice(i,1);
  }
  
}
