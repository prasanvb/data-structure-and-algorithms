function logger(value) {
  console.dir(value, { depth: null });
  console.log("-----------------------");
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    if (value) {
      let newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    return this;
  }
}

/* ------ DoubleLinkedList Creation ------ */
let dll = new DoubleLinkedList(90);

logger(dll);
logger(new DoubleLinkedList());
