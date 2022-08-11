const assert = require('assert');
const {calculateNumber} = require('./0-calcul');

describe('calculateNumber', () => {
  it('round the first argument', () => {
    assert.equal(calculateNumber(1.0, 0), 1);
    assert.equal(calculateNumber(1.8, 0), 2);
  });

  it('round the second argument', () => {
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.equal(calculateNumber(0, 1.8), 2);
  });

  it('should return the right number', () => {
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(0, 1.2), 1);
    assert.equal(calculateNumber(1.3, 1.3), 2);
  });
});