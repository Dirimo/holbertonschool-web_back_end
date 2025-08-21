export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // CODE
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // NAME
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Create a method to return the attributes in the following format : name (code)
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
