import {
  invalidDataTypeError,
  invalidParameterNumberError,
  sum
} from "./sum";

// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
//   expect(sum('d', 2)).toBe('invalid numbers');
//   expect(sum()).toBe('need two numbers');
//   expect(sum(2)).toBe('need two numbers');
// });

describe("Test cases for rectangle area function", () => {
  test("Given two numbers return the sum", () => {
    expect(sum(-2, 3)).toBe(1);
    expect(sum(2, 3)).toBe(5);
    expect(sum(100, 100)).toBe(200);
    expect(sum(2.1, 2.1)).toBe(4.2);
  });

  it("throws an error when one or more parameters are not numbers", () => {
    expect(() => {
      sum("hello", "hi");
    }).toThrow(invalidDataTypeError);
    expect(() => {
      sum("hello", 1);
    }).toThrow(invalidDataTypeError);
    expect(() => {
      sum(12, "1");
    }).toThrow(invalidDataTypeError);
    expect(() => {
      sum(12, true);
    }).toThrow(invalidDataTypeError);
  });

  it("throws an error when one or 0 parameters are passed", () => {
    expect(() => {
      sum();
    }).toThrow(invalidParameterNumberError);
    expect(() => {
      sum(1);
    }).toThrow(invalidParameterNumberError);

    expect(() => {
      sum("hello");
    }).toThrow(invalidParameterNumberError);
  });
});