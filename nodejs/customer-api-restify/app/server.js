"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const customerRepository_1 = require("./customers/customerRepository");
const customerHandler_1 = require("./customers/customerHandler");
const server = restify.createServer({
    name: 'customer-api-restify',
    version: '1.0.0'
});
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
var repository = new customerRepository_1.customerRepository();
var handler = new customerHandler_1.customerHandler(repository);
server.get('/api/customers', (req, res, next) => { handler.handleGet(req, res, next); });
server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});
//# sourceMappingURL=server.js.map