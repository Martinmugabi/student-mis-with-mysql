import express from 'express';
import ip from 'ip';
import cors from 'cors';
import { Code } from './enum/enum.js';
import { HttpResponse } from './Response/Response.js';
import { Status } from './enum/status.js';
import StudentRoutes from './Routes/StudentsRoutes.js';

export class App {
  constructor(port = process.env.SERVER_PORT || 5000) {
    this.app = express();
    this.port = port;
    this.APPLICATION_RUNNING = 'application is running on : ';
    this.ROUTE_NOT_FOUND = 'Route does not exist on the server';
    this.middleware();
    this.routes();
  }

  listen() {
    this.app.listen(this.port);
    console.log(`${this.APPLICATION_RUNNING} ${ip.address()}:${this.port}`);
  }

  middleware() {
    this.app.use(cors({ origin: '*' }));
    this.app.use(express.json());
  }

  routes() {
this.app.use("/students", StudentRoutes);
  }
}


