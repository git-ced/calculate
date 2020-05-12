import leastArguments from '../_utils/leastArguments';

/**
 * @name power
 * @summary Gets the power.
 *
 * @description Gets the power of given base (left most) raise to its succeeding numbers.
 *
 * @example
 * // Normal usage
 * let result = power(2,5,2); // the same as ((2)^5)^2
 * // => 1024
 *
 * @param {Array<number>} args given numbers.
 * @returns {number} the power
 *
 * @function pure
 */
export default function power(...args: number[]): number {
  leastArguments(2, arguments);

  return args.reduce((a, b) => a ** b);
}
