const linkedList = require('./linkedList.js');

class linkedListQueue {
  constructor() {
    this.list = new linkedList();
  }
  //O(1)
  enqueue(value) {
    this.list.append(value);
  }
  //O(1)
  dequeue() {
    this.list.removeFromFront();
  }
  //O(1)
  peek() {
    console.log(this.list.head.value);
  }
  //O(1)
  isEmpty() {
    console.log(this.list.isEmpty());
  }
  //O(1)
  getSize() {
    console.log(this.list.getSize());
  }
  //O(n)
  print() {
    this.list.print();
  }
}

const queue = new linkedListQueue();
queue.enqueue(5);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(6);
queue.peek();
queue.isEmpty(); //Should be false
queue.getSize(); //Should be 2
queue.print(); //7 -> 6