const queue = require('./queue.js')

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

  //DEPTH FIRST SEARCH
  //Visits all nodes starting from root, exploring far down branch and backtracking.
  //Preorder Traverse -> Read node value, visit left subtree, visit right subtree
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  //Inorder Traverse -> Visit left subtree, read data of node, visit right subtree
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  //Postorder Traverse -> Visit left subtree, visit right subtree, read data of node
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  //BREADTH FIRST SEARCH
  //Explore all nodes at present depth before moving on to next
  breadthFS (root) {
    let queueSearch = new queue();
    queueSearch.enqueue(root);
    while (queueSearch.size()) {
      let current = queueSearch.dequeue();
      console.log(current.value);
      if (current.left) {
        queueSearch.enqueue(current.left);
      }
      if (current.right) {
        queueSearch.enqueue(current.right);
      }
    }
  }

  minimum(root) {
    while(root.left) {
      root = root.left;
    }
    return root.value;
  }

  maximum(root) {
    while(root.right) {
      root = root.right;
    }
    return root.value;
  }

  delete () {

  }

}

let tree = new binaryTree();
console.log('Tree is empty: ', tree.isEmpty());
tree.insert(5);
tree.insert(4);
tree.insert(6);
tree.insert(9);
tree.insert(3);
console.log(tree.search(tree.root, 5));
console.log(tree.search(tree.root, 4));
console.log(tree.search(tree.root, 8));
console.log(tree.minimum(tree.root));
console.log(tree.maximum(tree.root));

// tree.preOrder(tree.root);
// tree.inOrder(tree.root);
// tree.postOrder(tree.root);
// tree.breadthFS(tree.root);