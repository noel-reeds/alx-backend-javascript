export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // check only happends when objects are created with extended classes
    const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    if (!methods.includes('evacuationWarningMessage ')) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  static method() {
    return 5 * 5;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    }
  }
}
