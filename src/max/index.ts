import immutableSort from '../_utils/immutableSort';
import leastArguments from '../_utils/leastArguments';

/**
 * @name max
 * @summary Returns the largest number.
 *
 * @description Returns the largest number.
 *
 * @example
 * // Normal usage
 * let result = max(2,4,6);
 * // => 6;
 *
 * @param {number} args numbers given.
 * @returns {number} largest number
 *
 * @function pure
 */
export default function max(...args: number[]): number {
  leastArguments(1, arguments);

  const sortedArray = immutableSort(args);

  return sortedArray[sortedArray.length - 1];
}
