import immutableSort from '../_utils/immutableSort';

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
    return (sortedArr[length / 2 - 1] + sortedArr[length / 2]) / 2;
  }

  return sortedArr[(length - 1) / 2];
}
