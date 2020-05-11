import exactArguments from '../_utils/exactArguments';
import squareRoot from '../squareRoot';
import sum from '../sum';
import difference from '../difference';
import square from '../square';

/**
 * @name distance
 * @summary Gets the distance between two points.
 *
 * @description Gets the distance between two points in a cartesian plane.
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

  const differenceX = difference(x1, x2);
  const differenceY = difference(y1, y2);
  const squareDiffX = square(differenceX);
  const squareDiffY = square(differenceY);
  const sumXY = sum(squareDiffX, squareDiffY);

  return squareRoot(sumXY);
}
