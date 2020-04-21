export type n = number;

export const sum = function(
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
    case 1:
      throw new Error('Expected of having two values to add');
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
};
