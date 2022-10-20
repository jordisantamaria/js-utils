import { parseStringToInt } from '../src/strings/parseStringToInt'

test('parse string to int only return numbers of string', () => {
  expect(parseStringToInt('a23d')).toEqual(23)
})

