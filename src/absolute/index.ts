import exactArguments from '../_utils/exactArguments';

/**
 * @name absolute
 * @summary Returns the absolute number.
 *
 * @description Returns the absolute number.
 *
 * @example
 * // Normal usage
 * let result = absolute(-6);
 * // => 6;
 *
 * @param {number} arg number given.
 * @returns {number} absolute number of given.
 *
 * @function pure
 */
export default function min(x: number): number {
  exactArguments(1, arguments);

  return Math.abs(x);
}
