import leastArguments from '../_utils/leastArguments';

/**
 * @name sum
 * @summary Returns the sum.
 *
 * @description Adds given numbers from left to right.
 *
 * @example
 * // Normal usage
 * let return sum(10,20,30);
 * // => 60
 *
 * // Using an array
 * let return sum(...[10,20,30]);
 * // => 60
 *
 * @param {Array<number>} args numbers to be added.
 * @returns {number} the resulting sum.
 *
 * @function pure
 */

export default function sum(...args: number[]): number {
  leastArguments(2, arguments);

  return args.reduce((a, b) => a + b);
}
