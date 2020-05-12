import immutableSort from '../_utils/immutableSort';
import sum from '../sum';
import difference from '../difference';
import quotient from '../quotient';

/**
 * @name median
 * @summary Gets the median.
 *
 * @description Arranges the numbers in order and gets the number halfway the list.
 *
 * @example
 * // Normal usage
 * let result = median(21,4,8,6);
 * // => 7
 *
 * // Using an array
 * let result = median(...[21,4,8,6]);
 * // => 7
 *
 * @param {Array<number>} args given numbers.
 * @returns {number} the resulting median.
 *
 * @function pure
 */

export default function median(...args: number[]): number {
  const sortedArr = immutableSort(args);

  const length = sortedArr.length;

  if (length % 2 === 0) {
    const lengthHalf = quotient(length, 2);

    const halfOne = sortedArr[difference(lengthHalf, 1)];
    const halfTwo = sortedArr[lengthHalf];

    const sumOfBothHalf = sum(halfOne, halfTwo);

    return quotient(sumOfBothHalf, 2);
  }

  return sortedArr[quotient(difference(length, 1), 2)];
}
