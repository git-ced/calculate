/**
 * @name sum
 * @summary Gets the sum.
 *
 * @description Adds given numbers from left to right.
 *
 * @example
 * // Normal usage
 * let result = sum(10,20,30);
 * // => 60
 *
 * // Using an array
 * let result = sum(...[10,20,30]);
 * // => 60
 *
 * @param {number} a - first number.
 * @param {number} b - second number.
 * @param {number} c - third number.
 * @param {number} d - fourth number.
 * @param {number} e - fifth number.
 * @param {number} f - sixth number.
 * @param {number} g - seventh number.
 * @param {number} h - eighth number.
 * @param {number} i - ninth number.
 * @param {number} j - tenth number.
 * @param {Array<number>} args - rest of the arguments.
 * @returns {number} - the resulting sum.
 */

export default function sum(
  a: number,
  b: number = 0,
  c: number = 0,
  d: number = 0,
  e: number = 0,
  f: number = 0,
  g: number = 0,
  h: number = 0,
  i: number = 0,
  j: number = 0,
  ...args: number[]
): number {
  const argLength = arguments.length;
  switch (argLength) {
    case 0:
      return 0;
    case 1:
      return a;
    case 2:
      return a + b;
    case 3:
      return a + b + c;
    case 4:
      return a + b + c + d;
    case 5:
      return a + b + c + d + e;
    case 6:
      return a + b + c + d + e + f;
    case 7:
      return a + b + c + d + e + f + g;
    case 8:
      return a + b + c + d + e + f + g + h;
    case 9:
      return a + b + c + d + e + f + g + h + i;
    case 10:
      return a + b + c + d + e + f + g + h + i + j;
    default: {
      let length = args.length;
      let result = a + b + c + d + e + f + g + h + i + j;
      while (length) {
        result += args[--length];
      }
      return result;
    }
  }
}
