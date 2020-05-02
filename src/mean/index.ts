/**
 * @name mean
 * @summary Gets the mean (average).
 *
 * @description Adds given numbers from left to right and divides the sum by the amount of the numbers.
 *
 * @example
 * // Normal usage
 * let result = mean(10,20,30);
 * // => 30
 *
 * // Using an array
 * let result = mean(...[10,20,30]);
 * // => 30
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
 * @returns {number} - the resulting mean.
 */

export default function mean(
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
      return (a + b) / 2;
    case 3:
      return (a + b + c) / 3;
    case 4:
      return (a + b + c + d) / 4;
    case 5:
      return (a + b + c + d + e) / 5;
    case 6:
      return (a + b + c + d + e + f) / 6;
    case 7:
      return (a + b + c + d + e + f + g) / 7;
    case 8:
      return (a + b + c + d + e + f + g + h) / 8;
    case 9:
      return (a + b + c + d + e + f + g + h + i) / 9;
    case 10:
      return (a + b + c + d + e + f + g + h + i + j) / 10;
    default: {
      let length = args.length;
      let result = a + b + c + d + e + f + g + h + i + j;
      while (length) {
        result += args[--length];
      }
      return result / argLength;
    }
  }
}
