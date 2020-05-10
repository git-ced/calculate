import leastArguments from '../_utils/leastArguments';

/**
 * @name remainder
 * @summary Gets the remainder.
 *
 * @description Divides given numbers from left to right and gets its remainder.
 *
 * @example
 * // Normal usage
 * let result = remainder(8,4,2);
 * // => 0
 *
 * // Using an array
 * let result = remainder(...[8,4,2]);
 * // => 0
 *
 * @param {Array<number>} args numbers given.
 * @returns {number} the resulting remainder.
 *
 * @function pure
 */

export default function remainder(...args: number[]): number {
  leastArguments(2, arguments);
  return args.reduce((a, b) => a % b);
}
