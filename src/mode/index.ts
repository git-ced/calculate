/**
 * @name mode
 * @summary Gets the mode.
 *
 * @description Gets the highest occuring number/s in a given numbers.
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
 * @param {Array<number>} args - given numbers.
 * @returns {Array<number>} - the resulting mode.
 */

export default function mode(...args: number[]): number[] {
  let highest = 0;
  let count: { [key: string]: number } = {};
  let result: number[] = [];
  let length = args.length;

  while (length) {
    const number = args[--length];

    if (!count[number]) {
      count[number] = 1;
      highest = 1;
      continue;
    }

    count[number] = count[number] + 1;

    if (highest < count[number]) {
      highest = count[number];
    }
  }

  Object.entries(count).forEach(([key, value]) => {
    if (value === highest) {
      result.push(parseInt(key, 10));
    }
  });

  return result;
}
