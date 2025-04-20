import { Code } from '../enum/enum.js';
import { Status } from '../enum/status.js';

export class HttpResponse {

  
  constructor(statusCode, httpStatus, message, data = {}) {
    this.statusCode = statusCode;
    this.httpStatus = httpStatus;
    this.message = message;
    this.data = data;
    this.timeStamp = new Date().toLocaleString();
  }
}
