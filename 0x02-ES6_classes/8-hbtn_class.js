export default class ALXClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](coerce) {
    if (coerce === 'number') {
      return this._size;
    }
    if (coerce === 'string') {
      return this._location;
    }
    return coerce;
  }
}
