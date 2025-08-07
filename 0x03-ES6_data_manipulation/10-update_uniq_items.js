export default function updateUniqueItems(map) {
  for (const [k, v] of map[Symbol.iterator]()) {
    if (v === 1) {
      map.set(k, 100);
    }
  }
  return map
}
