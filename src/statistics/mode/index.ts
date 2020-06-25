/**
 * @name mode
 * @summary Returns the mode.
 *
 * @description Returns the highest occuring number/s in a given numbers.
 *
 * @example
 * // Normal usage
 * let result = mode(2, 1, 8, 3, 2, 7, 4, 2, 6, 8);
 * // => [2]
 *
 * // Using an array
 * let result = mode(...[2, 1, 8, 3, 2, 7, 4, 2, 6, 8]);
 * // => [2]
 *
 * @param {Array<number>} args given numbers.
 * @returns {Array<number>} the resulting mode.
 *
 * @function pure
 */

export default function mode(...args: number[]): number[] {
  let count: { [key: string]: number } = {};
  let result: number[] = [];

  args.forEach(num => {
    if (!count[num]) {
      count[num] = 1;
      return;
    }

    count[num] += 1;
  });

  const highest = Math.max.apply(null, Object.values(count));

  Object.entries(count).forEach(([key, value]) => {
    if (value === highest) {
      result.push(parseInt(key, 10));
    }
  });

  return result;
}
