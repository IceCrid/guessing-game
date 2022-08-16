class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.minNumber = min;
      this.maxNumber = max;
    }

    guess() {
      this.number = Math.round((this.maxNumber + this.minNumber) / 2);
      return this.number;
    }

    lower() {
      return this.maxNumber = Math.ceil(this.number);
    }

    greater() {
      return this.minNumber = Math.floor(this.number);
    }
}

module.exports = GuessingGame;
