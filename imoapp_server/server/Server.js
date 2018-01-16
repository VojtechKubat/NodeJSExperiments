import express from 'express';
import bodyParser from 'body-parser';

import { getAllThreads, getgetThreadById } from './services/ThreadService';

module.exports = class Server {
    constructor() {
        this.app = express();

        this.app.use(bodyParser.json());

        // this.app.get();

        this.app.get('/todos', (req, res) => {
            getAllThreads(req, res);
        });

        this.app.get('/todos/:id', (req, res)=>{
            console.log('Request body:', req.body);         // body is available because of bodyParser middleware
        });
    }
}