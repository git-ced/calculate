import {
  sum,
  difference,
  product,
  quotient,
  remainder,
  mean,
  median,
  sort,
  mode,
  range,
  insertionSort,
  quicksort,
} from '../src';

describe('Math', () => {
  it('Sum', () => {
    expect(sum(12, 200, 120)).toEqual(332);
  });
  it('Difference', () => {
    expect(difference(120, 200, -40)).toEqual(-40);
  });
  it('Product', () => {
    expect(product(-2, -4, 6)).toEqual(48);
  });
  it('Quotient', () => {
    expect(quotient(8, 4, 2)).toEqual(1);
  });
  it('Remainder', () => {
    expect(remainder(8, 4, 2)).toEqual(0);
  });
});

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
