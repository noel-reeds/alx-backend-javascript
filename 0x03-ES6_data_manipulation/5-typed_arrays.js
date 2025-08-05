export default function createInt8TypedArray(length, position, value) {
  const int8 = new DataView(new ArrayBuffer(length));
  if (position >= length) {
    throw Error('Position outside range');
  }
  int8.setInt8(position, value);
  return int8;
}
