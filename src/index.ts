// ANCHOR Types
import { n, s } from 'types';

// ANCHOR Sort
import { smartSort } from './sort';

// ANCHOR Calculate the sum ---------------------------------------------------/
export function sum(
  a: n,
  b: n,
  c: n = 0,
  d: n = 0,
  e: n = 0,
  f: n = 0,
  g: n = 0,
  h: n = 0,
  i: n = 0,
  j: n = 0,
  ...args: n[]
) {
  const argLen = arguments.length;
  switch (argLen) {
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
      let len = args.length;
      let result = a + b + c + d + e + f + g + h + i + j;
      while (len) {
        result += args[--len];
      }
      return result;
    }
  }
}

// ANCHOR Calculate the difference --------------------------------------------/
export function difference(
  a: n,
  b: n,
  c: n = 0,
  d: n = 0,
  e: n = 0,
  f: n = 0,
  g: n = 0,
  h: n = 0,
  i: n = 0,
  j: n = 0,
  ...args: n[]
) {
  const argLen = arguments.length;
  switch (argLen) {
    case 0:
      return 0;
    case 1:
      return a;
    case 2:
      return a - b;
    case 3:
      return a - b - c;
    case 4:
      return a - b - c - d;
    case 5:
      return a - b - c - d - e;
    case 6:
      return a - b - c - d - e - f;
    case 7:
      return a - b - c - d - e - f - g;
    case 8:
      return a - b - c - d - e - f - g - h;
    case 9:
      return a - b - c - d - e - f - g - h - i;
    case 10:
      return a - b - c - d - e - f - g - h - i - j;
    default: {
      let len = args.length;
      let result = a - b - c - d - e - f - g - h - i - j;
      while (len) {
        result -= args[--len];
      }
      return result;
    }
  }
}

// ANCHOR Calculate the product -----------------------------------------------/
export function product(
  a: n,
  b: n,
  c: n = 1,
  d: n = 1,
  e: n = 1,
  f: n = 1,
  g: n = 1,
  h: n = 1,
  i: n = 1,
  j: n = 1,
  ...args: n[]
) {
  const argLen = arguments.length;
  switch (argLen) {
    case 0:
      return 0;
    case 1:
      return a;
    case 2:
      return a * b;
    case 3:
      return a * b * c;
    case 4:
      return a * b * c * d;
    case 5:
      return a * b * c * d * e;
    case 6:
      return a * b * c * d * e * f;
    case 7:
      return a * b * c * d * e * f * g;
    case 8:
      return a * b * c * d * e * f * g * h;
    case 9:
      return a * b * c * d * e * f * g * h * i;
    case 10:
      return a * b * c * d * e * f * g * h * i * j;
    default: {
      let len = args.length;
      let result = a * b * c * d * e * f * g * h * i * j;
      while (len) {
        result *= args[--len];
      }
      return result;
    }
  }
}

// ANCHOR Calculate the quotient ----------------------------------------------/
export function quotient(
  a: n,
  b: n,
  c: n = 1,
  d: n = 1,
  e: n = 1,
  f: n = 1,
  g: n = 1,
  h: n = 1,
  i: n = 1,
  j: n = 1,
  ...args: n[]
) {
  const argLen = arguments.length;
  switch (argLen) {
    case 0:
      return 0;
    case 1:
      return a;
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
      let len = args.length;
      let result = a / b / c / d / e / f / g / h / i / j;
      while (len) {
        result /= args[--len];
      }
      return result;
    }
  }
}

// ANCHOR Calculate the remainder ---------------------------------------------/
export function remainder(
  a: n,
  b: n,
  c: n = 1,
  d: n = 1,
  e: n = 1,
  f: n = 1,
  g: n = 1,
  h: n = 1,
  i: n = 1,
  j: n = 1,
  ...args: n[]
) {
  const argLen = arguments.length;
  switch (argLen) {
    case 0:
      return 0;
    case 1:
      return a;
    case 2:
      return a % b;
    case 3:
      return (a % b) % c;
    case 4:
      return ((a % b) % c) % d;
    case 5:
      return (((a % b) % c) % d) % e;
    case 6:
      return ((((a % b) % c) % d) % e) % f;
    case 7:
      return (((((a % b) % c) % d) % e) % f) % g;
    case 8:
      return ((((((a % b) % c) % d) % e) % f) % g) % h;
    case 9:
      return (((((((a % b) % c) % d) % e) % f) % g) % h) % i;
    case 10:
      return ((((((((a % b) % c) % d) % e) % f) % g) % h) % i) % j;
    default: {
      let len = args.length;
      let result = ((((((((a % b) % c) % d) % e) % f) % g) % h) % i) % j;
      while (len) {
        result %= args[--len];
      }
      return result;
    }
  }
}

// ANCHOR Sort given values ---------------------------------------------------/
export function sort(...args: s[] | n[]) {
  smartSort(args);
}

// ANCHOR Calculate the mean --------------------------------------------------/
export function mean(
  a: n,
  b: n,
  c: n = 0,
  d: n = 0,
  e: n = 0,
  f: n = 0,
  g: n = 0,
  h: n = 0,
  i: n = 0,
  j: n = 0,
  ...args: n[]
) {
  const argLen = arguments.length;
  switch (argLen) {
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
      let len = args.length;
      let result = a + b + c + d + e + f + g + h + i + j;
      while (len) {
        result += args[--len];
      }
      return result / argLen;
    }
  }
}

// ANCHOR Calculate the median ------------------------------------------------/
export function median(...args: n[]) {
  const length = args.length;
  smartSort(args);

  if (length % 2 === 0) {
    return (args[length / 2 - 1] + args[length / 2]) / 2;
  }

  return args[(length - 1) / 2];
}
