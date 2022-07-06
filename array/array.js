class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return item;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {}
  unshift() {}
  delete() {}
  shiftIndex(index) {
    for (let i = index; i < this.length - 1, i++; ) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

console.log('array');

export default MyArray;
