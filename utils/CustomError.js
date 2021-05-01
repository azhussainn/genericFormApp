function CustomError(message) {
    this.name = 'CustomError';
    this.message = message || '';
    var error = new Error(this.message);
    error.name = this.name;
    this.stack = error.stack;
  }
CustomError.prototype = Object.create(Error.prototype);

module.exports = CustomError