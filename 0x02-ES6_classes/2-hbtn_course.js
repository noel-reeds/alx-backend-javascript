export default class ALXCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw Error('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw Error('Length must be a number');
    }
    if (typeof students === 'object') {
      this._students = students;
    } else {
      throw Error('Students must be an array of Strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}
