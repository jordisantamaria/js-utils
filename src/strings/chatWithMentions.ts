type Member = {
  title: string
  accountId: number
}

export const getTextWithMentionsList = (text: string, members: Member[]) => {
  return formatText(text, members, [])
}

const formatText = (
  text: string,
  members: Member[],
  resultList: any[],
): any[] => {
  const index = text.indexOf('@')
  if (index < 0) {
    // return text formated and include rest of text after last mention
    return text.length > 0 ? [...resultList, { text: text }] : resultList
  }
  const list = [...resultList]
  if (index > 0) {
    // include text before mention
    list.push({ text: text.substring(0, index) })
  }
  // text starting by @
  let surplusText = text.substring(index)

  members.forEach((member) => {
    const mentionIndex = surplusText.indexOf(member.title!)
    if (mentionIndex === 1) {
      // include mention text
      list.push({ text: `@${member.title}`, accountId: member.accountId })
      // text after mention
      surplusText = surplusText.substring(member.title.length + 1)
    }
  })
  return formatText(surplusText, members, list)
}

