const chai = require('chai');
const sinon = require('sinon');
const displayMessage = require('./0-console');

const { expect } = chai;

describe('displayMessage', () => {
  it('should output the correct message', () => {
    const spy = sinon.spy(process.stdout, 'write');
    displayMessage('Hello NodeJS!');
    expect(spy.calledWith('Hello NodeJS!\n')).to.be.true;
    spy.restore();
  });
});
