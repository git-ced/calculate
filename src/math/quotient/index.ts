import leastArguments from '../../_utils/leastArguments';

/**
 * @name quotient
 * @summary Returns the quotient.
 *
 * @description Divides given numbers from left to right.
 *
 * @example
 * // Normal usage
 * let result = quotient(8,4,2);
 * // => 1
 *
 * // Using an array
 * let result = quotient(...[8,4,2]);
 * // => 1
 *
 * @param {Array<number>} args numbers to be divided
 * @returns {number} the resulting quotient.
 *
 * @function pure
 */

export default function quotient(...args: number[]): number {
  leastArguments(2, arguments);

  return args.reduce((a, b) => a / b);
}
