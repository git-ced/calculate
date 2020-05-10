import immutableSort from '../_utils/immutableSort';

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

  const arr = sortedArr.slice(0);

  const result = arr[arr.length - 1] - arr[0];

  return result;
}
