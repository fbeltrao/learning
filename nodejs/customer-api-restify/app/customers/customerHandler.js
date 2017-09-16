"use strict";
exports.__esModule = true;
var customerHandler = /** @class */ (function () {
    function customerHandler(repository) {
        this.repository = repository;
    }
    customerHandler.prototype.handleGet = function (req, res, next) {
        var customers = this.repository.getCustomers();
        res.write(customers);
        next();
    };
    return customerHandler;
}());
exports.customerHandler = customerHandler;
