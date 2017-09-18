import * as restify from 'restify';

import { customerRepository } from './customers/customerRepository';
import { customerHandler } from './customers/customerHandler';

const server = restify.createServer({
    name: 'customer-api-restify',
    version: '1.0.0'
});


server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

var repository = new customerRepository(); 
var handler = new customerHandler(repository);

server.get('/api/customers', (req, res, next) => { handler.handleGet(req, res, next); });

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});