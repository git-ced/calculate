import { negate } from '../../src';

describe('Negate', () => {
  it('Negate P', () => {
    expect(negate(4)).toEqual(-4);
  });
  it('Negate N', () => {
    expect(negate(-4)).toEqual(4);
  });
});
