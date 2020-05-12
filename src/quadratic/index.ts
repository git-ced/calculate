import exactArguments from '../_utils/exactArguments';
import notAllowed from '../_utils/notAllowed';
import squareRoot from '../squareRoot';

export interface IRoot {
  firstRoot: number;
  secondRoot: number;
}

/**
 * @name quadratic
 * @summary Returns the root.
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

  const bSquared = b * b;
  const fourAC = 4 * a * c;
  const twiceA = a * 2;
  const rSquareRoot = squareRoot(bSquared - fourAC);

  return {
    firstRoot: (-b + rSquareRoot) / twiceA,
    secondRoot: (-b - rSquareRoot) / twiceA,
  };
}
