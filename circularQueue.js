class circularQueue {

  constructor (size) {
    this.items = new Array(size);
    this.size = size;
    this.length = 0;
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.items[this.rear] = element;
      this.rear = (this.rear + 1) % this.size;
      this.length++;
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.size;
      this.length--;
      if (this.isEmpty()) {
        this.front = 0;
        this.rear = 0;
      }
      return item;
    }
    return null;

  }

  isFull() {
    return this.length === this.size;
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    return this.items[this.front];
  }

  queueSize() {
    console.log(this.length);
  }

  print() {
    return this.items.toString();
  }

}

const test = new circularQueue(3);
test.enqueue(5);
console.log(test.peek());
console.log(test.isEmpty());
// console.log(test.size());
test.queueSize();
test.enqueue(4);
test.enqueue(7);
test.enqueue(8);
console.log(test.dequeue());
test.enqueue(9);
test.enqueue(10);
console.log(test.print());