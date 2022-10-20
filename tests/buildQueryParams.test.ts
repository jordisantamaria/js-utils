import { buildQueryParams } from '../src/strings/buildQueryParams'

test('build query params', () => {
  const queryParams = buildQueryParams({ name: 'jordi', surname: 'santamaria' })
  expect(queryParams).toEqual('name=jordi&surname=santamaria')
})

