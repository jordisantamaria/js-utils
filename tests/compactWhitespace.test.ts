import { compactWhitespace } from '../src/strings/compactWhitespace'

test('compact whitespace', () => {
  expect(compactWhitespace('Lorem    Ipsum')).toBe('Lorem Ipsum')
  expect(compactWhitespace('Lorem \n Ipsum')).toBe('Lorem Ipsum')
})

