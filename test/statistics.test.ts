import { mean, median, mode, range } from '../src';

describe('Statistics', () => {
  it('Mean', () => {
    expect(mean(2, 4, 6)).toEqual(4);
  });
  it('Median Even', () => {
    expect(median(21, 4, 8, 6)).toEqual(7);
  });
  it('Median Odd', () => {
    expect(median(21, 4, 8, 6, 12)).toEqual(8);
  });
  it('Mode', () => {
    expect(mode(2, 1, 8, 3, 2, 7, 4, 2, 6, 8)).toEqual([2]);
  });
  it('Mode Bi', () => {
    expect(mode(2, 1, 8, 3, 2, 7, 8, 2, 6, 8)).toEqual([2, 8]);
  });
  it('Range', () => {
    expect(range(2, 1, 8, 3, 2, 7, 8, 2, 6, 8)).toEqual(7);
  });
});
