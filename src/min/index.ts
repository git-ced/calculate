import immutableSort from '../_utils/immutableSort';

/**
 * @name min
 * @summary Returns the smallest number.
 *
 * @description Returns the smallest number.
 *
 * @example
 * // Normal usage
 * let result = min(2,4,6);
 * // => 2;
 *
 * @param {number} args numbers given.
 * @returns {number} smallest number
 *
 * @function pure
 */
export default function min(...args: number[]): number {
  const sortedArray = immutableSort(args);

  return sortedArray[0];
}
