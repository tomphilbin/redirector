'use strict';

class Metricator {
  constructor(db, winston) {
    this.db = db;
    this.winston = winston;
  }

  create(metric) {
    this.db.save(metric.toJSON(), (err) => {
      if(err) {
        this.winston.error(err.message);
      }
    });
  }
}


module.exports = Metricator;
