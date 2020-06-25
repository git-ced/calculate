import { quadratic } from '../../src';

describe('Quadratic', () => {
  it('Quadratic P', () => {
    expect(quadratic(4, 4, 1).firstRoot).toEqual(-0.5);
  });
  it('Quadratic N', () => {
    expect(quadratic(4, 4, 1).secondRoot).toEqual(-0.5);
  });
});
