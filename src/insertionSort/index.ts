type sn = string[] | number[];

/**
 * @name insertionSort
 * @summary Sorts the list using insertion sort.
 *
 * @description Currently, this insertion sort only sorts the list in ascending order.
 *
 * @example
 * // Sort a number
 * let result = insertionSort([12,62,2,32,6]);
 * // => [2, 6, 12, 32, 62]
 *
 * // Sorting a string
 * let result = insertionSort(['1000','A100','B200','2000','A1000']);
 * // => ["1000", "2000", "A100", "A1000", "B200"]
 *
 * @param {Array<number> | Array<string>} args - array to be sorted.
 * @returns {Array<number> | Array<string>} - the sorted array in ascending order.
 *
 * @function pure
 */
export default function insertionSort(args: sn): sn {
  const arr = args.slice(0);

  const length = arr.length;

  for (let i = 1; i < length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}
