import exactArguments from '../../_utils/exactArguments';

/**
 * @name sqaureRoot
 * @summary Returns the sqaure root of a number.
 *
 * @description Returns the sqaure root of a number.
 *
 * @example
 * // Normal usage
 * let result = sqaureRoot(16);
 * // => 4
 *
 * @param {numberr} a number to be solved.
 * @returns {number}
 *
 * @function pure
 */
export default function sqaureRoot(a: number): number {
  exactArguments(1, arguments);

  return a ** 0.5;
}
