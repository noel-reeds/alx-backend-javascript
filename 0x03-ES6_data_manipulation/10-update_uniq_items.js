export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const [k, v] of map[Symbol.iterator]()) {
      if (v === 1) {
        map.set(k, 100);
      }
    }
    return map;
  } else {
    throw Error('Cannot process');
  }
}
