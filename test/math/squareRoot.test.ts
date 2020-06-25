import { squareRoot } from '../../src';

describe('Square Root', () => {
  it('Square Root of 0', () => {
    expect(squareRoot(0)).toEqual(0);
  });
  it('Square Root Negative', () => {
    expect(squareRoot(-1)).toEqual(NaN);
  });
  it('Square Root', () => {
    expect(squareRoot(15)).toEqual(3.872983346207417);
  });
});
