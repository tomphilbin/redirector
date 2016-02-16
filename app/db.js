'use strict';

class Db {
  constructor(mongoClient) {
    this.mongoClient = mongoClient;
  }

  save(url, collection, json, callback) {
    this.mongoClient.connect(url, (err, db) => {
      if(err) {
        return callback(err);
      }

      db.collection(collection).insertOne(json, (err) => {
        db.close();
        return callback(err);
      });
    });
  }
}

module.exports = Db;
