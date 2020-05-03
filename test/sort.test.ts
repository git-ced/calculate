import { sort, insertionSort, quicksort } from '../src';

describe('Sort', () => {
  it('Insertion Number', () => {
    expect(insertionSort([6, 2, 7, 12, 523])).toEqual([2, 6, 7, 12, 523]);
  });
  it('Insertion String', () => {
    expect(insertionSort(['1000', 'A100', 'B200', '2000', 'A1000'])).toEqual([
      '1000',
      '2000',
      'A100',
      'A1000',
      'B200',
    ]);
  });
  it('Quicksort Number', () => {
    expect(quicksort([6, 2, 7, 12, 523])).toEqual([2, 6, 7, 12, 523]);
  });
  it('Quicksort String', () => {
    expect(quicksort(['1000', 'A100', 'B200', '2000', 'A1000'])).toEqual([
      '1000',
      '2000',
      'A100',
      'A1000',
      'B200',
    ]);
  });
  it('Default Number', () => {
    expect(sort([6, 2, 7, 12, 523])).toEqual([2, 6, 7, 12, 523]);
  });
  it('Default String', () => {
    expect(sort(['1000', 'A100', 'B200', '2000', 'A1000'])).toEqual([
      '1000',
      '2000',
      'A100',
      'A1000',
      'B200',
    ]);
  });
});
