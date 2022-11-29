type Member = {
  title: string
  accountId: number
}

export const getTextWithMentionsList = (
  text: string,
  members: Member[]
) => {
  return formatMentionText(text, members, [])
}

const formatMentionText = (
  text: string,
  members: Member[],
  resultList: any[]
): any[] => {
  const index = text.indexOf('@')
  if (index < 0) {
    // return text formated and include rest of text after last mention
    return text.length > 0 ? [...resultList, { text: text }] : resultList
  }
  const list = [...resultList]

  let foundMember: any = null
  members.forEach((member) => {
    const mentionIndex = text.indexOf(member.title!)
    if (mentionIndex === index + 1) {
      foundMember = { text: `@${member.title}`, accountId: member.accountId }
    }
  })

  let surplusText = text
  if (foundMember) {
    if (index > 0) {
      // include text before mention
      list.push({ text: text.substring(0, index) })
    }
    // include mention
    list.push(foundMember)
    surplusText = surplusText.substring(index + foundMember.text.length)
  } else {
    const indexNextMention = text.substring(index + 1).indexOf('@')
    if (indexNextMention < 0) {
      // if not more mentions, return text formated and include rest of text after last mention
      return text.length > 0 ? [...resultList, { text: text }] : resultList
    }
    // if not found, add text before next mention
    list.push({ text: text.substring(0, index + 1 + indexNextMention) })
    surplusText = surplusText.substring(index + 1 + indexNextMention)
  }
  return formatMentionText(surplusText, members, list)
}
