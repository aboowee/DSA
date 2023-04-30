const linkedList = require('./linkedList.js');

class linkedListStack {
  constructor() {
    this.list = new linkedList();
  }
  //O(1)
  push(value) {
    this.list.prepend(value);
  }
  //O(1)
  pop() {
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

const stack = new linkedListStack();
stack.push(5);
stack.push(7);
stack.pop();
stack.push(6);
stack.peek();
stack.isEmpty(); //Should be false
stack.getSize(); //Should be 2
stack.print(); //5 -> 6