import { getTextWithMentionsList } from '../src/strings/chatWithMentions'

test('text with mentions', () => {
  const members: any[] = [
    { title: 'member one', accountId: 1 },
    { title: 'a random member', accountId: 2 },
  ]
  const text =
    'Hello @member one how are you, and  @a random member also is here'
  const textWithMentions = getTextWithMentionsList(text, members)
  expect(textWithMentions).toEqual([
    { text: 'Hello ' },
    { text: '@member one', accountId: 1 },
    { text: ' how are you, and  ' },
    { text: '@a random member', accountId: 2 },
    { text: ' also is here' },
  ])
})

test('text with mentions ending with mention', () => {
  const members: any[] = [
    { title: 'member one', accountId: 1 },
    { title: 'a random member', accountId: 2 },
  ]
  const text = 'Hello @member one how are you, and  @a random member'
  const textWithMentions = getTextWithMentionsList(text, members)
  expect(textWithMentions).toEqual([
    { text: 'Hello ' },
    { text: '@member one', accountId: 1 },
    { text: ' how are you, and  ' },
    { text: '@a random member', accountId: 2 },
  ])
})

test('text with mentions start with mention', () => {
  const members: any[] = [
    { title: 'member one', accountId: 1 },
    { title: 'a random member', accountId: 2 },
  ]
  const text = '@member one how are you, and  @a random member'
  const textWithMentions = getTextWithMentionsList(text, members)
  expect(textWithMentions).toEqual([
    { text: '@member one', accountId: 1 },
    { text: ' how are you, and  ' },
    { text: '@a random member', accountId: 2 },
  ])
})

test('text with mention not existing member', () => {
  const members: any[] = [
    { title: 'member one', accountId: 1 },
    { title: 'a random member', accountId: 2 },
  ]
  const text = 'hello @jo how are you'
  const textWithMentions = getTextWithMentionsList(text, members)
  expect(textWithMentions).toEqual([{ text: 'hello @jo how are you' }])
})
test('text with mention not existing member and existing member', () => {
  const members: any[] = [
    { title: 'member one', accountId: 1 },
    { title: 'a random member', accountId: 2 },
  ]
  const text = 'hello @jo how are you, and @member one also'
  const textWithMentions = getTextWithMentionsList(text, members)
  expect(textWithMentions).toEqual([
    { text: 'hello @jo how are you, and ' },
    { text: '@member one', accountId: 1 },
    { text: ' also' },
  ])
})
