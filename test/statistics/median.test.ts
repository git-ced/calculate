import { median } from '../../src';

describe('Median', () => {
  it('Median Even', () => {
    expect(median(21, 4, 8, 6)).toEqual(7);
  });
  it('Median Odd', () => {
    expect(median(21, 4, 8, 6, 12)).toEqual(8);
  });
});
