'use strict';

let mongoDb = {
  collection: (name)=> {
    return mongoDb;
  },
  insertOne: (json, callback)=> {
    callback(null);
  },
  close: ()=> {

  }
}

module.exports = mongoDb;
