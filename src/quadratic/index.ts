import exactArguments from '../_utils/exactArguments';
import notAllowed from '../_utils/notAllowed';
import negate from '../negate';
import squareRoot from '../squareRoot';
import sum from '../sum';
import difference from '../difference';
import square from '../square';
import quotient from '../quotient';
import product from '../product';

export interface IRoot {
  firstRoot: number;
  secondRoot: number;
}

/**
 * @name quadratic
 * @summary Gets the root.
 *
 * @description Returns the first and second root of a quadratice equation
 *
 * @example
 * // Normal usage
 * let result = root(4,4,1);
 * // => {firstRoot: -0.5, secondRoot: -0.5}
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {IRoot} the resulting root.
 *
 * @function pure
 */

export default function quadratic(a: number, b: number, c: number): IRoot {
  exactArguments(3, arguments);
  notAllowed({ a }, 0);

  const bNegate = negate(b);
  const bSquared = square(b);
  const fourAC = product(4, a, c);
  const bSquaredMinusFourAC = difference(bSquared, fourAC);
  const rSquareRoot = squareRoot(bSquaredMinusFourAC);
  const plusUp = sum(bNegate, rSquareRoot);
  const minusUp = difference(bNegate, rSquareRoot);
  const twiceA = product(a, 2);
  const firstRoot = quotient(plusUp, twiceA);
  const secondRoot = quotient(minusUp, twiceA);

  return {
    firstRoot,
    secondRoot,
  };
}
