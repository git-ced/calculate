import exactArguments from '../_utils/exactArguments';

/**
 * @name cube
 * @summary Gets the cube of a number.
 *
 * @description Gets the cube of a number.
 *
 * @example
 * // Normal usage
 * let result = cube(2);
 * // => 8
 *
 * @param {numberr} a - number to be cubed.
 * @returns {number}
 *
 * @function pure
 */
export default function cube(a: number): number {
  exactArguments(1, arguments);
  return a ** 3;
}
