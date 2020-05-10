/**
 * @name immutableSort
 *
 * @description - Accepts an array and returns a new array that is sorted. (numbers only)
 *
 * @param {Array<number>} required array to be sorted.
 * @param {Array<number>} argument new sorted array.
 */
export default function immutableSort(arr: number[]): number[] {
  return [...arr].sort((a, b) => a - b);
}
