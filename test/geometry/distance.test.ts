import { distance } from '../../src';

describe('Distance', () => {
  it('Distance', () => {
    expect(distance(2, 4, 6, 8)).toEqual(2.8284271247461903);
  });
  it('Distance 0', () => {
    expect(distance(2, 2, 4, 4)).toEqual(0);
  });
});
