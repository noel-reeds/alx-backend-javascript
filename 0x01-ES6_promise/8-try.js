export default function divideFunction(numerator, denominator) {
  const res = numerator / denominator;
  if (Number.isFinite(res)) {
    return res;
  }
  throw Error('cannot divide by 0');
}
