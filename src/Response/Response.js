

export class HttpResponse {

  
  constructor(statusCode, httpStatus, message, data = {}) {
    this.statusCode = statusCode;
    this.httpStatus = httpStatus;
    this.message = message;
    this.data = data;
    this.timeStamp = new Date().toLocaleString();
  }
}
