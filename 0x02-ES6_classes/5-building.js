export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // when a subClass extends from this class
    // and does not implement `certainMethod()`, throw an error.
    // this should happen only when `subClass extends baseClass` and not with `new` keyword
    // object creation.
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
