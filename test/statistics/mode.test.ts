import { mode } from '../../src';

describe('Mode', () => {
  it('Mode', () => {
    expect(mode(2, 1, 8, 3, 2, 7, 4, 2, 6, 8)).toEqual([2]);
  });
  it('Mode Bi', () => {
    expect(mode(2, 1, 8, 3, 2, 7, 8, 2, 6, 8)).toEqual([2, 8]);
  });
});
