'use strict';

let expect = require('chai').expect;
let sinon = require('sinon');

let resMock = require('../mocks/res.mock');

let RouteHandlers = require('../../app/route-handlers');

describe('route handlers', ()=> {

  let sut, sandbox;

  beforeEach(()=> {
    sandbox = sinon.sandbox.create();
    sandbox.spy(resMock, 'redirect');

    sut = new RouteHandlers();
  });

  afterEach(()=> {
    sandbox.restore();
  });

  it('should redirect the request to my github page', ()=> {
    sut.github(null, resMock);

    expect(resMock.redirect.calledWith('https://github.com/tomphilbin')).to.be.true;
  });

  it('should redirect the request to my stackoverflow profile', ()=> {
    sut.stackoverflow(null, resMock);

    expect(resMock.redirect.calledWith('http://stackoverflow.com/users/1584074/tom-p')).to.be.true;
  });

});
