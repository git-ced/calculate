import { product } from '../../src';

describe('Product', () => {
  it('Product', () => {
    expect(product(-2, -4, 6)).toEqual(48);
  });
});
