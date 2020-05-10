/**
 * @name leastArguments
 *
 * @description - Throws error when number of arguments recieved did not meet expected minimum.
 *
 * @param {number} required required number of arguments.
 * @param {Array<any>} argument arguments received.
 */
export default function leastArguments(
  required: number,
  argument: IArguments
): any {
  if (argument.length < required) {
    throw new TypeError(
      `${required} argument${required > 1 ? 's' : ''} required, but only ${
        argument.length
      } is present`
    );
  }
}
