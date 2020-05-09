import leastArguments from '../_utils/leastArguments';

/**
 * @name quotient
 * @summary Gets the quotient.
 *
 * @description Divides given numbers from left to right.
 *
 * @example
 * // Normal usage
 * let result = quotient(8,4,2);
 * // => 1
 *
 * // Using an array
 * let result = quotient(...[8,4,2]);
 * // => 1
 *
 * @param {number} a first number.
 * @param {number} b second number.
 * @param {number} c third number.
 * @param {number} d fourth number.
 * @param {number} e fifth number.
 * @param {number} f sixth number.
 * @param {number} g seventh number.
 * @param {number} h eighth number.
 * @param {number} i ninth number.
 * @param {number} j tenth number.
 * @param {Array<number>} args rest of the arguments.
 * @returns {number} the resulting quotient.
 *
 * @function pure
 */

export default function quotient(
  a: number,
  b: number = 1,
  c: number = 1,
  d: number = 1,
  e: number = 1,
  f: number = 1,
  g: number = 1,
  h: number = 1,
  i: number = 1,
  j: number = 1,
  ...args: number[]
): number {
  const argLength = arguments.length;
  leastArguments(2, argLength);

  switch (argLength) {
    case 2:
      return a / b;
    case 3:
      return a / b / c;
    case 4:
      return a / b / c / d;
    case 5:
      return a / b / c / d / e;
    case 6:
      return a / b / c / d / e / f;
    case 7:
      return a / b / c / d / e / f / g;
    case 8:
      return a / b / c / d / e / f / g / h;
    case 9:
      return a / b / c / d / e / f / g / h / i;
    case 10:
      return a / b / c / d / e / f / g / h / i / j;
    default: {
      const num = args.slice(0);

      let length = num.length;

      let result = a / b / c / d / e / f / g / h / i / j;

      while (length) {
        result /= num[--length];
      }

      return result;
    }
  }
}
