"use strict";
exports.__esModule = true;
var customer_1 = require("./customer");
var customerRepository = /** @class */ (function () {
    function customerRepository() {
    }
    // saves customer in repository
    customerRepository.prototype.saveCustomer = function (customer) {
        return customer;
    };
    customerRepository.prototype.getCustomers = function () {
        var list = new Array();
        list.push(new customer_1.customer('McEnroe', 'Mark', new Date('1950-05-20')));
        list.push(new customer_1.customer('Sinatra', 'Johny'));
        return list;
    };
    return customerRepository;
}());
exports.customerRepository = customerRepository;
