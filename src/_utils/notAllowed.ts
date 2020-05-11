/**
 * @name notAllowed
 *
 * @description - Throws error when number of arguments recieved did not meet expected minimum.
 *
 * @param {{ [key: string]: number }} variable variable to be compared.
 * @param {number} value value which the variable must not equal to.
 */
export default function notAllowed(
  variable: { [key: string]: number },
  value: number
): any {
  if (Object.values(variable)[0] === value) {
    throw new TypeError(
      `${Object.keys(variable)[0]} must not be equal to ${value}`
    );
  }
}
