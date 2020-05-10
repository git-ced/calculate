/**
 * @name exactArguments
 *
 * @description - Throws error when number of arguments recieved did not meet exact number.
 *
 *  @param {number} required required number of arguments.
 * @param {Array<any>} argument arguments received.
 */
export default function exactArguments(
  required: number,
  argument: IArguments
): any {
  if (argument.length !== required) {
    throw new TypeError(
      `${required} argument${required > 1 ? 's' : ''} required, but ${
        argument.length
      } is present`
    );
  }
}
