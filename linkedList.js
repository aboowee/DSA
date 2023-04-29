class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }
  getSize() {
    return this.size;
  }

  prepend(value) {
    const headVal = new node(value);
    if (this.isEmpty()) {
      this.head = headVal;
      this.tail = this.head;
    } else {
      headVal.next = this.head;
      this.head = headVal;
    }
    this.size++;
  }

  append(value) {
    const tailVal = new node(value);
    if (this.isEmpty()) {
      this.head = tailVal;
      this.tail = this.head;
    } else {
      this.tail.next = tailVal;
      this.tail = tailVal;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    } else if (index === 0) {
      this.prepend(value);
    }
    let indexTracker = 0;
    let tracker = this.head;
    while (indexTracker < index-1) {
      tracker = tracker.next;
      indexTracker++;
    }
    let insertValue = new node(value);
    insertValue.next = tracker.next;
    tracker.next = insertValue;
    this.size++;
  }

  remove (index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
        this.head = this.head.next;
    } else {
      let indexTracker = 0;
      let tracker = this.head
      while (indexTracker < index - 1) {
        tracker = tracker.next;
        indexTracker++;
      }
      tracker.next = tracker.next.next;
    }
    this.size--;
  }

  removeValue (value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next
      }
      this.size--;
      return value;
    }
    let tracker = this.head;
    while (tracker.next) {
      if (tracker.next.value === value) {
        tracker.next = tracker.next.next;
        this.size--;
        return value;
      }
      tracker = tracker.next;
    }
    return null;
  }

  print() {
    if(this.isEmpty()){
      console.log('Empty List');
    } else {
      let tracker = this.head
      while(tracker) {
        console.log(tracker.value);
        tracker = tracker.next;
      }
    }
  }
}

const list = new linkedList();
console.log('Is Empty? ', list.isEmpty());
console.log('Size of 0: ', list.getSize());
list.prepend(5);
list.prepend(6);
list.prepend(8);
list.append(3);
list.append(34);
list.insert(99,1);
list.insert(69,1);
list.remove(0);
list.removeValue(3);
console.log('Size:  ', list.getSize())
list.print();
