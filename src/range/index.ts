import immutableSort from '../_utils/immutableSort';

/**
 * @name range
 * @summary Returns the range
 *
 * @description Returns the difference of the highest and lowest number in the given numbers
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

  const lastIndex = sortedArr.length - 1;

  return sortedArr[lastIndex] - sortedArr[0];
}
