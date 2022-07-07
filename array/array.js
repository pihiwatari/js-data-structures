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
  shift() {
    return this.delete(0);
  }
  unshift(item) {
    this.length++;
    let i = this.length - 1;
    for (i; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    return item;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

export default MyArray;
