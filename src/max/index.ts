import immutableSort from '../_utils/immutableSort';

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
  const sortedArray = immutableSort(args);

  return sortedArray[sortedArray.length - 1];
}
