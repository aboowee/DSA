class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class binaryTree {
  constructor () {
    this.root = null;
    this.depth = 0;
  }
  isEmpty () {
    return !this.root;
  }
  insert(value) {
    let tracker = this.root;
    let insertNode = new node(value);
    if (!tracker) {
      this.root = insertNode;
      return;
    }
    while(tracker) {
      if (value > tracker.value) {
        if (tracker.right) {
          tracker = tracker.right
        } else {
          tracker.right = insertNode;
          return;
        }
      } else if (value < tracker.value) {
        if (tracker.left) {
          tracker = tracker.left
        } else {
          tracker.left = insertNode;
          return;
        }
      }
    }
  }
  search (root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value)
      } else if (value > root.value) {
        return this.search(root.right, value);
      }
    }
  }

  depthFS (depth) {

  }

  breadthFS () {

  }

  delete () {

  }

}

let tree = new binaryTree();
console.log('Tree is empty: ', tree.isEmpty());
tree.insert(5);
tree.insert(4);
tree.insert(6);
console.log(tree.search(tree.root, 5));
console.log(tree.search(tree.root, 4));
console.log(tree.search(tree.root, 8));