import { csvToArray } from '../src/csv/csvToArray'

const csv = `word,pronunciation,meaning,association
つゆ知らず,tsuyushirazu, no tiene ni idea.
嗚咽, oetsu, llorar aguantandose la voz.
喝采, kassai, aplauso aclamacion
`

test('adds 1 + 2 to equal 3', () => {
  const csvData = csvToArray(csv, ',')
  const expectedResult = [
    ['word', 'pronunciation', 'meaning', 'association'],
    ['つゆ知らず', 'tsuyushirazu', ' no tiene ni idea.'],
    ['嗚咽', ' oetsu', ' llorar aguantandose la voz.'],
    ['喝采', ' kassai', ' aplauso aclamacion'],
    [''],
  ]
  expect(csvData).toEqual(expectedResult)
})
