'use strict';

class DbMock {
  constructor(mongoDb) {
    this.mongoDb = mongoDb;
  }
  save(url, collection, json, callback) {

  }
}

module.exports = DbMock;
