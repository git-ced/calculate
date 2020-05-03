/**
 * @name leastArguments
 *
 * @description - Throws error when number of arguments recieved did not meet expected minimum.
 *
 *  @param {number} required - required number of arguments.
 * @param {number} actual - number of arguments received.
 */
export default function leastArguments(required: number, actual: number): any {
  if (actual < required) {
    throw new TypeError(
      `${required} argument${
        required > 1 ? 's' : ''
      } required, but only ${actual} is present`
    );
  }
}
