export const invalidDataTypeError = new Error(
  "Both parameters must be a number"
);

export const invalidParameterNumberError = new Error(
  "This function needs two parameters"
);

export function sum(a, b) {
  if (a === undefined || b === undefined) {
    throw invalidParameterNumberError
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw invalidDataTypeError  }
  return a + b;
}