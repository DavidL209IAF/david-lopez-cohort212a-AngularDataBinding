export class Patient {

    public firstName: string;
    public lastName: string;
    public email: string;
    public phone: string;
    public patientNo: number;
    public createdBy: string;

    constructor(firstName: string, lastName: string, email: string, phone: string, createdBy: string){
        this.patientNo = Math.floor(Math.random() * 10000);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.createdBy = createdBy;
    }
}