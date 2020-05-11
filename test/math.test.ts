import {
  sum,
  difference,
  product,
  quotient,
  remainder,
  square,
  cube,
  power,
  factorial,
  squareRoot,
  negate,
  quadratic,
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
  it('Square Root 0', () => {
    expect(squareRoot(0)).toEqual(0);
  });
  it('Square Root Negative', () => {
    expect(squareRoot(-1)).toEqual(NaN);
  });
  it('Square Root', () => {
    expect(squareRoot(15)).toEqual(3.872983346207417);
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
  it('Factorial 0', () => {
    expect(factorial(0)).toEqual(1);
  });
  it('Factorial 1', () => {
    expect(factorial(1)).toEqual(1);
  });
  it('Factorial 4', () => {
    expect(factorial(4)).toEqual(24);
  });
  it('Negate P', () => {
    expect(negate(4)).toEqual(-4);
  });
  it('Negate N', () => {
    expect(negate(-4)).toEqual(4);
  });
  it('Quadratic P', () => {
    expect(quadratic(4, 4, 1).firstRoot).toEqual(-0.5);
  });
  it('Quadratic N', () => {
    expect(quadratic(4, 4, 1).secondRoot).toEqual(-0.5);
  });
});
