import exactArguments from '../_utils/exactArguments';

/**
 * @name factorial
 * @summary Returns the factorial of a number.
 *
 * @description Returns the factorial of a number.
 *
 * @example
 * // Normal usage
 * let result = factorial(4);
 * // => 24
 *
 * @param {numberr} a numbers given.
 * @returns {number}
 *
 * @function pure
 */
export default function factorial(a: number): number {
  exactArguments(1, arguments);

  return factorialStep(a);
}

function factorialStep(a: number): number {
  if (a === 1 || a === 0) {
    return 1;
  }

  return a * factorialStep(a - 1);
}
