// return numbers of a string
export const parseStringToInt = (value: string | null) => {
  if (value === null || value === undefined) {
    return null
  }
  const totalNumber = parseInt(
    value.replace(/[^-0-9]/g, '').replace(/[0-9]-/g, ''),
  )
  return !isNaN(totalNumber) ? totalNumber : null
}

