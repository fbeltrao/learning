
export class customer {
    lastName: string;
    firstName: string;
    birthdate?: Date;



    constructor(lastName: string, firstName: string, birthdate?: Date) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthdate = birthdate;
    }
}