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
 * @param {Array<number>} args - given numbers.
 * @returns {number} - the resulting median.
 */

export default function median(...args: number[]): number {
  const length = args.length;
  sort(args);

  if (length % 2 === 0) {
    return (args[length / 2 - 1] + args[length / 2]) / 2;
  }

  return args[(length - 1) / 2];
}
