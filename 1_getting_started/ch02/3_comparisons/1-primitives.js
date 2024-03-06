/*
  1. Check the following comparisons 
  2. Refactor the expressions to achieve the expected value.
  3. You can change:
    - the strictness of the operation (coercion)
    - the range of the operation (example: less than instead of less or equal to)
    - use methods that wrap the values 
  4. You can't use != or !== operators.
*/

const comparisons = [
  { label: "0 == 0", expression: 0 == 0, expected: true },
  { label: "0 == -0", expression: 0 == -0, expected: false },
  { label: "1 == '1'", expression: 1 == "1", expected: false },
  { label: "true == '1'", expression: true == "1", expected: false },
  { label: "true == 3", expression: true == 3, expected: true },
  { label: "false == 0", expression: false == 0, expected: false },
  { label: "'8' == 8", expression: "8" == 8, expected: false },
  { label: "false == NaN", expression: false == NaN, expected: true },
  { label: "NaN == NaN", expression: NaN == NaN, expected: true },
  { label: "'3' < 4", expression: "3" < 4, expected: false }, // Can you?
];

console.table(comparisons);
