import leastArguments from '../_utils/leastArguments';

/**
 * @name product
 * @summary Gets the product.
 *
 * @description Multiplies given numbers from left to right.
 *
 * @example
 * // Normal usage
 * let result = product(-2,-4,6);
 * // => 48
 *
 * // Using an array
 * let result = product(...[-2,-4,6]);
 * // => 48
 *
 * @param {Array<number>} args numbers to be multiplied.
 * @returns {number} the resulting product.
 *
 * @function pure
 */

export default function product(...args: number[]): number {
  leastArguments(2, arguments);
  return args.reduce((a, b) => a * b);
}
