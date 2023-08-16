import express, { Application } from 'express'
import { connect } from './infra/database';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.middlewareInitialize();
        this.initializeRoutes();
        this.interceptorError();
        connect();
    }

    initializeRoutes() {
        // this.app.use('/', );
    }

    interceptorError() {
        // this.app.use();
    }

    middlewareInitialize() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    listen() {
        this.app.listen(3333, () => console.log('SERVER RUNNING'))
    }
}

export { App };