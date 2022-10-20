import { withoutNullKeyValues } from '../src/objects/objectWithoutNullKeyValues'

const data = { name: 'jordi', title: null, description: '', age: null }

test('without null key values', () => {
  const withoutNulls = withoutNullKeyValues(data, {})
  console.log({ withoutNulls })
  expect(withoutNulls).toEqual({ name: 'jordi', description: '' })
})

test('without null key values and empty strings', () => {
  const withoutNulls = withoutNullKeyValues(data, { allowEmptyValues: false })
  console.log({ withoutNulls })
  expect(withoutNulls).toEqual({ name: 'jordi' })
})

test('without null key values ignoring title', () => {
  const withoutNulls = withoutNullKeyValues(data, { excludeKeys: ['title'] })
  console.log({ withoutNulls })
  expect(withoutNulls).toEqual({ name: 'jordi', title: null, description: '' })
})

