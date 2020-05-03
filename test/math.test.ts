import { sum, difference, product, quotient, remainder, square } from '../src';

describe('Math', () => {
  it('Sum', () => {
    expect(sum(12, 200, 120)).toEqual(332);
  });
  it('Difference', () => {
    expect(difference(120, 200, -40)).toEqual(-40);
  });
  it('Product', () => {
    expect(product(-2, -4, 6)).toEqual(48);
  });
  it('Quotient', () => {
    expect(quotient(8, 4, 2)).toEqual(1);
  });
  it('Remainder', () => {
    expect(remainder(8, 4, 2)).toEqual(0);
  });
  it('Square', () => {
    expect(square(-8)).toEqual(64);
  });
});