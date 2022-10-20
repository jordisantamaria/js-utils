import { mapToObjectsArray } from '../src/arrays/mapToObjectsArray'

test('mapToObjectsArray', () => {
  const dataParsed = mapToObjectsArray(
    [
      ['jordi santamaria', 'full stack developer'],
      ['noname', 'frontend developer'],
    ],
    'name',
    'role',
  )
  expect(dataParsed).toEqual([
    { name: 'jordi santamaria', role: 'full stack developer' },
    { name: 'noname', role: 'frontend developer' },
  ])
})

