/**
 * @name quicksort
 * @summary Sorts the list using insertion sort.
 *
 * @description Currently, this insertion sort only sorts the list in ascending order.
 *
 * @example
 * // Sort a number
 * let result = quicksort([12,62,2,32,6]);
 * // => [2, 6, 12, 32, 62]
 *
 * // Sorting a string
 * let result = quicksort(['1000','A100','B200','2000','A1000']);
 * // => ["1000", "2000", "A100", "A1000", "B200"]
 *
 * @param {Array<number> | Array<string>} args - array to be sorted.
 * @returns {Array<number> | Array<string>} - the sorted array in ascending order.
 */

export default function quicksort(
  args: string[] | number[]
): string[] | number[] {
  quicksortStep(args, 0, args.length - 1);
  return args;
}

function quicksortStep(args: string[] | number[], left: number, right: number) {
  if (left >= right) {
    return;
  }

  const pivot = Math.floor((left + right) / 2);
  const index = partition(args, left, right, args[pivot]);
  quicksortStep(args, left, index - 1);
  quicksortStep(args, index, right);
}

function partition(
  args: string[] | number[],
  left: number,
  right: number,
  pivot: string | number
) {
  while (left <= right) {
    while (args[left] < pivot) {
      left = left + 1;
    }

    while (pivot < args[right]) {
      right = right - 1;
    }

    if (left <= right) {
      swap(args, left, right);
      left = left + 1;
      right = right - 1;
    }
  }

  return left;
}

function swap(args: string[] | number[], i: number, j: number) {
  var a = args[i];
  args[i] = args[j];
  args[j] = a;
}
