
export class customer {

    public lastName: string;
    public firtName: string;
    public birthdate?: Date;


    constructor(lastName: string, firstName: string, birthdate?: Date) {
        this.lastName = lastName;
        this.firtName = firstName;
        this.birthdate = birthdate;      
    }
    
}
