import { sum, difference, product } from '../src';

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
});
