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
  //O(1)
  isEmpty() {
    return !this.size;
  }

  //O(1)
  getSize() {
    return this.size;
  }
  //O(1)
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
  //O(1)
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
  //O(1)
  removeFromFront () {
    if(this.isEmpty()) {
      return;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return;
  }

  //O(n)
  removeFromBack () {
    if (this.isEmpty()) {
      return;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let tracker = this.head;
      while (tracker.next !== this.tail) {
        tracker = tracker.next;
      }
      tracker.next = null;
      this.tail = tracker
    }
    this.size--
  }
  //O(n)
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
  //O(n)
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
  //O(n)
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

  //O(n)
  reverse() {
    //Keep pointer for tracker
    //Keep pointer for reversed list
    let tracker = this.head;
    let reverseTracker = null;
    let setTail = false;
    while (tracker) {
    //5 > 4 > 3 > 2 > 1 > Null
      let current = tracker.next;
      tracker.next = reverseTracker;
      reverseTracker = tracker;
      if (!setTail) {
        this.tail = reverseTracker;
        setTail = true;
      }
      tracker = current;
    }
    this.head = reverseTracker;
    //1 > 2 > 3 > 4 > 5 > Null
  }

  //O(n)
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
list.reverse();
list.append(10);
list.print();
