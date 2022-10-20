type SortOptions = {
  key: string
  order?: 'asc' | 'desc'
  key2?: string
  order2?: 'asc' | 'desc'
}
export function sortArray<T>(
  array: T[],
  { key, order = 'desc', key2, order2 = 'desc' }: SortOptions,
): T[] {
  array.sort((a: any, b: any) => {
    if (a[key] < b[key]) return order === 'asc' ? -1 : 1
    if (a[key] > b[key]) return order === 'asc' ? 1 : -1

    if (key2 != null) {
      if (a[key2] < b[key2]) return order2 === 'asc' ? -1 : 1
      if (a[key2] > b[key2]) return order2 === 'asc' ? 1 : -1
    }
    return 0
  })

  return array
}

