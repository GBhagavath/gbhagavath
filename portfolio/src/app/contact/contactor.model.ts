export class ContactorModel {
    public firstName: string
    public lastName: string
    public email: string
    public phoneNumber: string
    public message: string

    constructor(fName: string, lName: string, email: string, number: string, msg: string) {
        this.firstName = fName;
        this.lastName = lName;
        this.email = email;
        this.phoneNumber = number;
        this.message = msg;
    }
}