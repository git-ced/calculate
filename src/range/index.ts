import sort from '../sort';

/**
 * @name range
 * @summary Gets the range
 *
 * @description Gets the difference of the highest and lowest number in the given numbers
 *
 * @example
 * // Normal usage
 * let result = range(10,20,30);
 * // => 20
 * // Using an array
 * let result = range(...[10,20,30]);
 * // => 20
 *
 * @param {Array<number>} args - given numbers
 * @returns {number} - the resulting range
 */

export default function range(...args: number[]): number {
  sort(args);
  return args[args.length - 1] - args[0];
}
