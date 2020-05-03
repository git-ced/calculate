import {
  sum,
  difference,
  product,
  quotient,
  remainder,
  square,
  cube,
  power,
} from '../src';

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
  it('Cube', () => {
    expect(cube(2)).toEqual(8);
  });
  it('Power', () => {
    expect(power(2, 5, 2)).toEqual(1024);
  });
});
