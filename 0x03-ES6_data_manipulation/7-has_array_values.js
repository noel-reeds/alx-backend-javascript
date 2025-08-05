export default function hasValuesFromArray(set, arr) {
  let trueOrFalse;
  for (const k of arr) {
    trueOrFalse = set.has(k);
  }
  return trueOrFalse;
}
