// remove element from array
export function omitArray<T>(array: T[], element: T): T[] {
  return array.filter((el) => {
    return el !== element
  })
}

