import leastArguments from '../_utils/leastArguments';
import sum from '../sum';

/**
 * @name mean
 * @summary Gets the mean (average).
 *
 * @description Adds given numbers from left to right and divides the sum by the amount of the numbers.
 *
 * @example
 * // Normal usage
 * let result = mean(10,20,30);
 * // => 30
 *
 * // Using an array
 * let result = mean(...[10,20,30]);
 * // => 30
 *
 * @param {Array<number>} args numbers to be averaged..
 * @returns {number} the resulting mean.
 *
 * @function pure
 */

export default function mean(...args: number[]): number {
  leastArguments(2, arguments);

  return sum(...args) / arguments.length;
}
