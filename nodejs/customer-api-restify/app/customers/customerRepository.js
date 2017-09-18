"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./customer");
class customerRepository {
    constructor() {
    }
    // saves customer in repository
    saveCustomer(customer) {
        return customer;
    }
    getCustomers() {
        var list = new Array();
        list.push(new customer_1.customer('McEnroe', 'Mark', new Date('1950-05-20')));
        list.push(new customer_1.customer('Sinatra', 'Johny'));
        return list;
    }
}
exports.customerRepository = customerRepository;
//# sourceMappingURL=customerRepository.js.map