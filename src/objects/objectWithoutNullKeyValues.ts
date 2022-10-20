type Options = { excludeKeys?: string[]; allowEmptyValues?: boolean }

export const withoutNullKeyValues = (
  obj: any,
  { excludeKeys, allowEmptyValues = true }: Options,
) => {
  const clone = { ...obj }
  for (const propName in clone) {
    if (excludeKeys && excludeKeys.includes(propName)) {
      continue
    }
    if (clone[propName] === null || clone[propName] === undefined) {
      delete clone[propName]
    }
    if (!allowEmptyValues && clone[propName] === '') {
      delete clone[propName]
    }
  }
  return clone
}

