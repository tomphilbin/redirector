'use strict';

let expect = require('chai').expect;
let sinon = require('sinon');

let Metricator = require('../../app/metricator');
let Metric = require('../../app/metric');

let DbMock = require('../mocks/db.mock');
let winstonMock = require('../mocks/winston.mock');

describe('metricator', ()=> {

  let sut, metric, sandbox, dbMock;

  beforeEach(()=> {
    sandbox = sinon.sandbox.create();

    dbMock = new DbMock();
    metric = new Metric('127.0.0.1', 'gitub', new Date());

    sut = new Metricator(dbMock, winstonMock);
  });

  afterEach(()=> {
    sandbox.restore();
  });

  it('should save the metric json to the db when creating a metric', ()=> {
    dbMock.save = sandbox.spy();

    sut.create(metric);

    expect(dbMock.save.calledWith(metric.toJSON())).to.be.true;
  });

  it('should log an error if there is a failure when posting a metric', ()=> {
    sandbox.stub(dbMock, 'save', (metric, callback)=> {
      callback(new Error('there was a problem!'));
    });
    winstonMock.error = sandbox.spy();

    sut.create(metric);

    expect(winstonMock.error.calledWith('there was a problem!')).to.be.true;
  });
});
