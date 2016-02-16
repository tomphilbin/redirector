'use strict';

class Metric {
  constructor(ip, route, timestamp) {
    this.ip = ip;
    this.route = route;
    this.timestamp = timestamp;
  }

  toJSON() {
    return {
      ip: this.ip,
      route: this.route,
      timestamp: this.timestamp
    };
  }
}

module.exports = Metric;
