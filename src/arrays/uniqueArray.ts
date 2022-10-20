export function uniqueArray<T>(array: T[]): T[] {
  return array.filter(function (x, i, self) {
    return self.indexOf(x) === i
  })
}

