import leastArguments from '../_utils/leastArguments';

/**
 * @name difference
 * @summary Gets the difference.
 *
 * @description Subtracts given numbers from left to right.
 *
 * @example
 * // Normal usage
 * let result = difference(120,200,-40);
 * // => -40
 *
 * // Using an array
 * let result = difference(...[120,200,-40]);
 * // => -40
 *
 * @param {Array<number>} args numbers to be subtracted.
 * @returns {number} the resulting difference.
 *
 * @function pure
 */

export default function difference(...args: number[]): number {
  leastArguments(2, arguments);
  return args.reduce((a, b) => a - b);
}
