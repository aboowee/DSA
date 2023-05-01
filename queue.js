class queue {
  constructor() {
    this.items = {};
    this.start = 0;
    this.end = 0;
  }
  enqueue(element) {
    this.items[this.end]=element;
    this.end++;
  }
  dequeue() {
    const removedItem = this.items[this.start];
    delete this.items[this.start];
    this.start++;
    return removedItem;
  }
  peek() {
    return this.items[this.start];
  }
  isEmpty() {
    return this.end-this.start === 0;
  }
  size() {
    return this.end-this.start;
  }
  print() {
    return this.items;
  }
}

const test = new queue();
test.enqueue(5);
console.log(test.peek());
console.log(test.isEmpty());
console.log(test.size());
test.enqueue(4);
test.enqueue(7);
console.log(test.dequeue());
console.log(test.print());

module.exports = queue;