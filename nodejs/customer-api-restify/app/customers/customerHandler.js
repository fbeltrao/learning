"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class customerHandler {
    constructor(repository) {
        this.repository = repository;
    }
    handleGet(req, res, next) {
        var customers = this.repository.getCustomers();
        res.write(JSON.stringify(customers));
        res.end();
        next();
    }
}
exports.customerHandler = customerHandler;
//# sourceMappingURL=customerHandler.js.map