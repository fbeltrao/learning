import * as restify from 'restify';
import { customerRepository } from './customerRepository';
import { customer } from './customer';

export class customerHandler {

    private repository: customerRepository;

    constructor (repository: customerRepository) {
        this.repository = repository;
    }

    handleGet(req: restify.Request, res: restify.Response, next: restify.Next) {

        var customers = this.repository.getCustomers();        
        res.write(JSON.stringify(customers));
        res.end();
        next();
    }
}