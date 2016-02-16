'use strict';

class Server {
  constructor(http, winston) {
    this.http = http;
    this.winston = winston;
  }

  start(app, ip, port) {
    this.http.createServer(app).listen(port, ip,  () => {
      this.winston.info('Listening at %s:%d ', ip, port);
    });
  }
}

module.exports = Server;
