import { sortArray } from '../src/arrays/sortArray'

test('sort array 1 key', () => {
  expect(
    sortArray([{ value: 1 }, { value: 6 }, { value: 3 }], {
      key: 'value',
      order: 'asc',
    }),
  ).toEqual([{ value: 1 }, { value: 3 }, { value: 6 }])
})

test('sort array 2 keys', () => {
  expect(
    sortArray(
      [
        { value: 1, date: '2000-02-23' },
        { value: 3, date: '2000-03-13' },
        { value: 6, date: '2000-01-23' },
        { value: 3, date: '2000-01-13' },
      ],
      { key: 'value', order: 'asc', key2: 'date', order2: 'asc' },
    ),
  ).toEqual([
    { value: 1, date: '2000-02-23' },
    { value: 3, date: '2000-01-13' },
    { value: 3, date: '2000-03-13' },
    { value: 6, date: '2000-01-23' },
  ])
})

