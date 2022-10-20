import { omitArray } from "../src/arrays/omitArray";

test('omit element from array', () => {
  expect(omitArray([1, 2, 3, 4, 5], 4)).toEqual([1, 2, 3, 5]);
  expect(omitArray([1, 2, 3, 4, 5], 1)).toEqual([2, 3, 4, 5]);
  expect(omitArray([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4]);
})
