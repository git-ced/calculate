import immutableSort from '../_utils/immutableSort';
import difference from '../difference';

/**
 * @name range
 * @summary Gets the range
 *
 * @description Gets the difference of the highest and lowest number in the given numbers
 *
 * @example
 * // Normal usage
 * let result = range(10,20,30);
 * // => 20
 * // Using an array
 * let result = range(...[10,20,30]);
 * // => 20
 *
 * @param {Array<number>} args given numbers
 * @returns {number} the resulting range
 *
 * @function pure
 */

export default function range(...args: number[]): number {
  const sortedArr = immutableSort(args);

  const highestIndex = difference(sortedArr.length, 1);

  return difference(sortedArr[highestIndex], sortedArr[0]);
}
