'use strict';

let expect = require('chai').expect;
let sinon = require('sinon');

let Db = require ('../../app/db');

let mongoClientMock = require('../mocks/mongo-client.mock');
let mongoDbMock = require('../mocks/mongo-db.mock');

describe('db', ()=> {

  let sut, sandbox;

  beforeEach(()=> {
    sut = new Db(mongoClientMock);
    sandbox = sinon.sandbox.create();
  });

  afterEach(()=> {
    sandbox.restore();
  });

  it('should callback with any connection errors when connecting to the database', ()=> {
    sandbox.stub(mongoClientMock, 'connect', (url, callback)=> {
      callback('an err');
    });
    let spy = sandbox.spy();

    sut.save('url', 'collection', { some: 'json' }, spy);

    expect(spy.calledWith('an err')).to.be.true;
  });

  it('should close the database connection after inserting a record', ()=> {
    sandbox.spy(mongoDbMock, 'close');
    sandbox.stub(mongoClientMock, 'connect', (url, callback)=> {
      callback(null, mongoDbMock);
    });

    sut.save('url', 'collection', { some: 'json' }, ()=> {});

    expect(mongoDbMock.close.calledOnce).to.be.true;
  });

  it('should callback with any errors when saving a record', ()=> {
    sandbox.stub(mongoClientMock, 'connect', (url, callback)=> {
      callback(null, mongoDbMock);
    });
    sandbox.stub(mongoDbMock, 'insertOne', (url, callback)=> {
      callback('much errs');
    });
    let spy = sandbox.spy();

    sut.save('url', 'collection', { some: 'json' }, spy);

    expect(spy.calledWith('much errs')).to.be.true;
  });

  it('should callback with null if there were no errors when saving a record', ()=> {
    sandbox.stub(mongoClientMock, 'connect', (url, callback)=> {
      callback(null, mongoDbMock);
    });
    let spy = sandbox.spy();

    sut.save('url', 'collection', { some: 'json' }, spy);

    expect(spy.calledWith(null)).to.be.true;
  });

});
