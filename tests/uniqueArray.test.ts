import { uniqueArray } from '../src/arrays/uniqueArray'

test('Utils.unique', () => {
  expect(uniqueArray([1, 1, 2, 3, 3])).toEqual([1, 2, 3])
})

