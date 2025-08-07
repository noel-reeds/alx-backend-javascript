export default function cleanSet(set, startString) {
  let appendStr = '';
  for (const str of set.values()) {
    if (str.startsWith(startString) && startString.length !== 0) {
      const m = startString.length;
      if (appendStr.length === 0) {
        appendStr += `${str.slice(m)}`;
      } else {
        appendStr += `-${str.slice(m)}`;
      }
    }
  }
  return appendStr;
}
