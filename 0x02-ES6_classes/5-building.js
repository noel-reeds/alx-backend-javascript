export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (new.target !== 'Building') {
      const proto = Object.getPrototypeOf(this);
      if (Object.getOwnPropertyNames(proto).includes('evacuationWarningMessage')) {
        return;
      }
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
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
