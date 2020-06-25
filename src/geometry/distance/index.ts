import exactArguments from '../../_utils/exactArguments';
import squareRoot from '../../math/squareRoot';
import square from '../../math/square';

/**
 * @name distance
 * @summary Returns the distance between two points.
 *
 * @description Returns the distance between two points in a cartesian plane.
 *
 * @example
 * // Normal usage
 * let result = distance(2,4,6,8);
 * // => 2.8284271247461903
 *
 * @param {number} x1
 * @param {number} x2
 * @param {number} y1
 * * @param {number} y2
 * @returns {number} the resulting distance.
 *
 * @function pure
 */

export default function distance(
  x1: number,
  x2: number,
  y1: number,
  y2: number
): number {
  exactArguments(4, arguments);

  return squareRoot(square(x1 - x2) + square(y1 - y2));
}
