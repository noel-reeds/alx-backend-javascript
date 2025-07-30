export default function divideFunction(numerator, denominator) {
  try {
    const res = numerator / denominator;
    if (Number.isFinite(res)) {
      return res;
    }
    throw new Error('cannot divide by 0');
  } catch (err) {
    return err;
  }
}
