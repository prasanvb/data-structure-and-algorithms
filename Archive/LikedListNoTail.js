function logger(value) {
  return console.dir(value, { depth: Number.MAX_VALUE });
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    if (!!this.length) return false;
    return true;
  }

  getLength() {
    return this.length;
  }

  print() {
    if (this.isEmpty()) {
      return "List is Empty";
    }
    let values = "";
    let temp = this.head;
    while (temp) {
      values += `${temp.value}->`;
      temp = temp.next;
    }
    let length = this.length;
    return { values, length };
  }

  // Prepend: O(1)
  unshift(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // Append: O(n)
  // Append with tail: O(1)
  push(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = node;
    }
    this.length++;
    return this;
  }

  // O(n)
  insert(index, value) {
    let node = new Node(value);
    if (this.isEmpty() || index === 0) {
      this.unshift(value);
    } else if (index > this.length - 1 || index < 0) {
      return "index out of range";
    } else {
      let temp = this.head;
      let tempIndex = 0;
      while (tempIndex + 1 !== index) {
        temp = temp.next;
        tempIndex++;
      }
      node.next = temp.next;
      temp.next = node;
      this.length++;
    }
    return this;
  }

  // O(n)
  removeIndex(index) {
    if (this.isEmpty()) return "List is empty";
    if (index > this.length - 1 || index < 0) return "index out of range";
    if (index === 0) {
      let temp = this.head;
      this.head = temp.next;
      temp.next = null;
      this.length--;
      return temp;
    } else {
      let pre = null;
      let temp = this.head;
      let tempIndex = 0;
      while (tempIndex !== index) {
        pre = temp;
        temp = temp.next;
        tempIndex++;
      }
      pre.next = temp.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }

  // O(n)
  removeValue(value) {
    if (this.isEmpty()) return "List is empty";
    if (this.head.value === value) {
      let temp = this.head;
      this.head = temp.next;
      temp.next = null;
      this.length--;
      return temp;
    } else {
      let pre = null;
      let temp = this.head;
      for (let i = 0; i < this.length - 1 && temp.value !== value; i++) {
        pre = temp;
        temp = temp.next;
      }
      if (temp.value === value) {
        pre.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
      } else {
        return "item not found";
      }
    }
  }

  // O(n)
  get(index) {
    // also called as Find or Search
    if (this.isEmpty()) return "List is Empty";
    if (index < 0 || index > this.length - 1) return "index out of range";
    let temp = this.head;
    for (let i = 0; i < this.length - 1 && i !== index; i++) {
      temp = temp.next;
    }
    return temp.value;
  }

  reverse() {
    let prev = null;
    let temp = this.head;
    while (temp) {
      let after = temp.next;
      temp.next = prev;
      prev = temp;
      temp = after;
    }
    this.head = prev;
    return this;
  }
}

let myLinkedList = new LinkedList();
// logger(myLinkedList);
// logger(myLinkedList.isEmpty());
// logger(myLinkedList.getLength());
// logger(myLinkedList.print());

myLinkedList.unshift(12);
myLinkedList.unshift(9);
myLinkedList.unshift(100);

myLinkedList.push(200);
myLinkedList.push(11);
myLinkedList.push(78);

myLinkedList.insert(98, 123);
myLinkedList.insert(-1, 123);
myLinkedList.insert(1, 123);
myLinkedList.insert(0, "apple");

logger(myLinkedList.removeIndex(98));
logger(myLinkedList.removeIndex(-98));
logger(myLinkedList.removeIndex(0));
logger(myLinkedList.removeIndex(2));

logger(myLinkedList.removeValue(-98));
logger(myLinkedList.removeValue(100));
logger(myLinkedList.removeValue(200));
logger(myLinkedList.print());

logger(myLinkedList.get(90));
logger(myLinkedList.get(-90));
logger(myLinkedList.get(0));
logger(myLinkedList.get(2));

myLinkedList.reverse();
logger(myLinkedList.print());
