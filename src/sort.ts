// ANCHOR Types
import { s, n } from 'types';

// ANCHOR Sort with insertion sort --------------------------------------------/
export function insertionSort(args: s[] | n[]) {
  let length = args.length;
  for (let i = 1; i < length; i++) {
    let key = args[i];
    let j = i - 1;
    while (j >= 0 && args[j] > key) {
      args[j + 1] = args[j];
      j = j - 1;
    }
    args[j + 1] = key;
  }
  return args;
}

// ANCHOR Sort with quick sort ------------------------------------------------/
export function quicksort(args: s[] | n[]) {
  quicksortStep(args, 0, args.length - 1);
  return args;
}

function quicksortStep(args: s[] | n[], left: n, right: n) {
  if (left >= right) {
    return;
  }

  const pivot = Math.floor((left + right) / 2);
  const index = partition(args, left, right, args[pivot]);
  quicksortStep(args, left, index - 1);
  quicksortStep(args, index, right);
}

function partition(args: s[] | n[], left: n, right: n, pivot: s | n) {
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

function swap(args: s[] | n[], i: n, j: n) {
  var a = args[i];
  args[i] = args[j];
  args[j] = a;
}

// ANCHOR Sort with smart sort ------------------------------------------------/
export function smartSort(args: s[] | n[]) {
  const len = args.length;

  if (len < 400) {
    return insertionSort(args);
  }

  return quicksort(args);
}
