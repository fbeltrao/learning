"use strict";
exports.__esModule = true;
var restify = require("restify");
var customerRepository_1 = require("./customers/customerRepository");
var customerHandler_1 = require("./customers/customerHandler");
var server = restify.createServer({
    name: 'customer-api-restify',
    version: '1.0.0'
});
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
var repository = new customerRepository_1.customerRepository();
var handler = new customerHandler_1.customerHandler(repository);
server.get('/api/customers', handler.handleGet);
server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});
