import { range } from '../../src';

describe('Range', () => {
  it('Range', () => {
    expect(range(2, 1, 8, 3, 2, 7, 8, 2, 6, 8)).toEqual(7);
  });
});
