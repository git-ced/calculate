import exactArguments from '../_utils/exactArguments';

/**
 * @name square
 * @summary Returns the square of a number.
 *
 * @description Returns the square of a number.
 *
 * @example
 * // Normal usage
 * let result = sqaure(4);
 * // => 16
 *
 * @param {numberr} a number to be squared.
 * @returns {number}
 *
 * @function pure
 */
export default function square(a: number): number {
  exactArguments(1, arguments);

  return a ** 2;
}
