import { customer } from './customer';

export class customerRepository {


    constructor() {

    }

    // saves customer in repository
    public saveCustomer(customer: customer) : customer {

        return customer;
    }

    public getCustomers(): Array<customer> {
        var list = new Array<customer>();
        list.push(new customer('McEnroe', 'Mark', new Date('1950-05-20')));
        list.push(new customer('Sinatra', 'Johny'));

        return list;
    }    
}