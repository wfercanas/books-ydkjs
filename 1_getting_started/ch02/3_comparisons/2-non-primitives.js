/*
  1. This exercise is about comparing values, either primitives or non-primitives.
  2. In the values array, there are some values to be compared and the expected result.
  3. Code the compare function to achieve the expected results in values.
  4. You can't change or reorder the properties on the objects.
  5. It doesn't matter if the properties between the two compared objects are not in the same order, if the properties and their values
      are equal, then the comparison should return true.
*/

const cities = {
  colombia: "bogota",
  spain: "madrid",
  australia: "canberra",
};

const teams = {
  manchester: {
    city: {
      striker: "haaland",
      keeper: "ederson",
      midfielder: "de bruyne",
    },
    united: {
      striker: "rashford",
      keeper: "de gea",
      midfielder: "bruno",
    },
  },
  london: {
    arsenal: {
      striker: "saka",
      keeper: "leno",
      midfielder: "smith-rowe",
    },
    chelsea: {
      striker: "jackson",
      keeper: "sanchez",
      midfielder: "fernandez",
    },
  },
};

const values = [
  { label: "1 - 1", values: [1, 1], expected: true },
  { label: "0 - 1", values: [0, 1], expected: false },
  { label: "a - a", values: ["a", "a"], expected: true },
  { label: "a - b", values: ["a", "b"], expected: false },
  { label: "true - true", values: [true, true], expected: true },
  { label: "true - false", values: [true, false], expected: false },
  { label: "[1] - [1]", values: [[1], [1]], expected: true },
  {
    label: '{ name: "mike" }, { name: "mike" }',
    values: [{ name: "mike" }, { name: "mike" }],
    expected: true,
  },
  { label: "cities - cities", values: [cities, cities], expected: true },
  {
    label: "cities, [Object]",
    values: [
      cities,
      {
        spain: "madrid",
        colombia: "bogota",
        australia: "canberra",
      },
    ],
    expected: true,
  },
  {
    label: "teams - {...teams}",
    values: [teams, { ...teams }],
    expected: true,
  },
];

values.forEach((value) => (value.result = compare(value[0], value[1])));

function compare(value1, value2) {
  //code here
}

console.table(values);
