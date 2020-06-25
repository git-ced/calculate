import { factorial } from '../../src';

describe('Factorial', () => {
  it('Factorial 0', () => {
    expect(factorial(0)).toEqual(1);
  });
  it('Factorial 1', () => {
    expect(factorial(1)).toEqual(1);
  });
  it('Factorial 4', () => {
    expect(factorial(4)).toEqual(24);
  });
});
