'use strict';

let expect = require('chai').expect;

let Metric = require('../../app/metric');

describe('metrics', ()=> {
  let sut, date;

  beforeEach(()=> {
    date = new Date();
    sut = new Metric('127.0.0.1', 'github', date);
  })

  it('should contain the ip address in the object\'s json', ()=> {
    let json = sut.toJSON();

    expect(json.ip).to.equal('127.0.0.1');
  });

  it('should contain the route address in the object\'s json', ()=> {
    let json = sut.toJSON();

    expect(json.route).to.equal('github');
  });

  it('should contain the timestamp address in the object\'s json', ()=> {
    let json = sut.toJSON();

    expect(json.timestamp).to.equal(date);
  });
});
