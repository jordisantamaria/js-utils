import { getTextWithMentionsList } from '../src/strings/chatWithMentions'

const members = [
  { title: 'jordi santamaria', accountId: 1 },
  { title: 'a random member', accountId: 2 },
]

test('text with mentions', () => {
  const text =
    'Hello @jordi santamaria how are you, and  @a random member also is here'
  const textWithMentions = getTextWithMentionsList(text, members)
  expect(textWithMentions).toEqual([
    { text: 'Hello ' },
    { text: '@jordi santamaria', accountId: 1 },
    { text: ' how are you, and  ' },
    { text: '@a random member', accountId: 2 },
    { text: ' also is here' },
  ])
})

test('text with mentions ending with mention', () => {
  const text = 'Hello @jordi santamaria how are you, and  @a random member'
  const textWithMentions = getTextWithMentionsList(text, members)
  expect(textWithMentions).toEqual([
    { text: 'Hello ' },
    { text: '@jordi santamaria', accountId: 1 },
    { text: ' how are you, and  ' },
    { text: '@a random member', accountId: 2 },
  ])
})

test('text with mentions start with mention', () => {
  const text = '@jordi santamaria how are you, and  @a random member'
  const textWithMentions = getTextWithMentionsList(text, members)
  expect(textWithMentions).toEqual([
    { text: '@jordi santamaria', accountId: 1 },
    { text: ' how are you, and  ' },
    { text: '@a random member', accountId: 2 },
  ])
})
test('text with mentions start with mention', () => {
  const text = '@jordi santamaria'
  const textWithMentions = getTextWithMentionsList(text, members)
  expect(textWithMentions).toEqual([
    { text: '@jordi santamaria', accountId: 1 },
  ])
})
