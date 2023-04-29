class stack {
  constructor() {
    this.items=[];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    if (this.items.length) {
      return this.items[this.items.length-1]
    }
    return null;
  }
  isEmpty() {
    return !this.items.length
  }
  size() {
    return this.items.length
  }
  print() {
    return this.items.toString();
  }
}

const test = new stack();
test.push(5);
console.log(test.peek());
console.log(test.isEmpty());
console.log(test.size());
test.push(4);
console.log(test.pop());
console.log(test.print());