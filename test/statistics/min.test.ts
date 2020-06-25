import { min } from '../../src';

describe('Min', () => {
  it('Min', () => {
    expect(min(-2, 2, -4, 4)).toEqual(-4);
  });
});
