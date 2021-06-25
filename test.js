class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let ratingsSum = this._ratings.reduce((currentSum, ratings) => currentSum + ratings, 0);
    const lengthOfArray = this._ratings.length;
    return ratingSum / lengthOfArray;
  }
  addRating() {
    ratings.push();
  }
  set isCheckedOut(newCheckedOut) {
    this._isCheckedOut = newCheckedOut;
  }
}
