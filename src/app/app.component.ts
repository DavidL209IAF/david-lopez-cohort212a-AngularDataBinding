import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: string = ''; //used on app.component html <p>
  userName: string =''; //binded and passed to patients.component as createdBy

  loginButton(){
    this.loggedIn = this.userName;
  }

  alertPatientAdded(){
    alert("Patient Successfully Added.")
  }

  alertPatientRemoved(){
    alert("Patient Successfully Removed.")
  }
}
