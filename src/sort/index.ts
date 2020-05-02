import insertionSort from '../insertionSort';
import quicksort from '../quicksort';

/**
 * @name sort
 * @summary Sorts the list using insertion sort.
 *
 * @description Currently, this insertion sort only sorts the list in ascending order.
 *
 * @example
 * // Sort a number
 * let result = sort([12,62,2,32,6]);
 * // => [2, 6, 12, 32, 62]
 *
 * // Sorting a string
 * let result = sort(['1000','A100','B200','2000','A1000']);
 * // => ["1000", "2000", "A100", "A1000", "B200"]
 *
 * @param {Array<number> | Array<string>} args - array to be sorted.
 * @returns {Array<number> | Array<string>} - the sorted array in ascending order.
 */

export default function sort(args: string[] | number[]): string[] | number[] {
  const len = args.length;

  if (len < 400) {
    return insertionSort(args);
  }

  return quicksort(args);
}
