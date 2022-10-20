/**
 * Convert Map to array of objects
 *
 * The structure of the map is array of tuples
 * [['item1', 'item2'],['item3', 'item4']]
 */
export function mapToObjectsArray(map: any[][], key1: string, key2: string) {
  const contacts = new Map(map as any)

  const array = [...contacts].map((item) => ({
    [key1]: item[0],
    [key2]: item[1],
  }))

  return array
}
