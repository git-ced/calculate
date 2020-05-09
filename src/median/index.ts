import sort from '../sort';

/**
 * @name median
 * @summary Gets the median.
 *
 * @description Arranges the numbers in order and gets the number halfway the list.
 *
 * @example
 * // Normal usage
 * let result = median(21,4,8,6);
 * // => 7
 *
 * // Using an array
 * let result = median(...[21,4,8,6]);
 * // => 7
 *
 * @param {Array<number>} args given numbers.
 * @returns {number} the resulting median.
 *
 * @function pure
 */

export default function median(...args: number[]): number {
  const sortedArr = sort(args) as number[];

  const arr = sortedArr.slice(0);

  const length = arr.length;

  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }

  return arr[(length - 1) / 2];
}
