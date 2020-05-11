import exactArguments from '../_utils/exactArguments';

/**
 * @name negate
 * @summary Gets the negated value.
 *
 * @description Returns a same number with an opposite sign.
 *
 * @example
 * // Normal usage
 * let result = negate(2);
 * // => -2
 *
 * let result = negate(-4);
 * // => 4
 *
 * @param {number} a given number.
 * @returns {number} the negated value
 *
 * @function pure
 */
export default function negate(a: number): number {
  exactArguments(1, arguments);
  return -a;
}
