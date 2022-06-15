function logger(value) {
  console.dir(value, { depth: null, colors: true });
  console.log("-----------------------");
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

class BinarySearchTree {
  constructor(value) {
    if (value) {
      let newNode = new Node(value);
      this.root = newNode;
    } else {
      this.root = null;
    }
    return this;
  }

  // create a newNode
  // if root === null then newNode=root
  // let temp = this.root
  // while loop
  //   if newNode.value === temp.value then increase count by 1
  //   if newNode.value < temp.value move left or if newNode.value > temp.value move right
  //   if temp branch node is null, then set branch node to newNode
  //   else temp = branch node
  insert(value) {
    if (value) {
      let newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      let temp = this.root;
      while (true) {
        if (newNode.value === temp.value) {
          temp.count++;
          return this;
        } else if (newNode.value < temp.value) {
          if (!temp.left) {
            temp.left = newNode;
            return this;
          }
          temp = temp.left;
        } else if (newNode.value > temp.value) {
          if (!temp.right) {
            temp.right = newNode;
            return this;
          }
          temp = temp.right;
        }
      }
    }
  }

  // if root === null return false
  // let temp = this.root
  // if temp.value=value return true
  // while loop
  //   if value < temp.value move left
  //   if value > temp.value move right
  //   if temp branch node value = value then return true
  //   if temp branch node is null, then return false
  //   else temp = branch node
  contains(value) {
    if (this.root) {
      let temp = this.root;
      while (true) {
        if (temp.value === value) return true;
        if (value < temp.value) {
          if (temp.left === null) {
            return false;
          }
          temp = temp.left;
        }
        if (value > temp.value) {
          if (temp.right === null) {
            return false;
          }
          temp = temp.right;
        }
      }
      // Alternate while loop logic
      // while (temp) {
      //   if (value < temp.value) {
      //     temp = temp.left;
      //   } else if (value > temp.value) {
      //     temp = temp.right;
      //   } else {
      //      return true;
      //    }
      // }
      // return false
    }
    return undefined;
  }

  minValueNode(currentNode) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  maxValueNode(currentNode) {
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }
}

/* ------ Binary Search Tree which accepts duplicates ------- */
/* ------ Object Creation ------- */
let BST = new BinarySearchTree();
// logger(BST);

/* ------ INSERT Method ------- */
BST.insert(47);
// logger(BST);

BST.insert(21);
BST.insert(76);
BST.insert(18);
BST.insert(52);
BST.insert(82);
BST.insert(18);
logger(BST.insert(27));

/* ------ CONTAINS Method ------- */

logger(BST.contains(27));
logger(BST.contains(17));

/* ------ MINIMUM & MAXIMUM Method ------- */
logger(BST.minValueNode(BST.root));
logger(BST.minValueNode(BST.root.right));
logger(BST.minValueNode(BST.root.right.right));
// logger(BST.maxValueNode(BST.root));
// logger(BST.maxValueNode(BST.root.left));
