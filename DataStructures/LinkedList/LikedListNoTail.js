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
    let printValues = "";
    let temp = this.head;
    while (temp) {
      printValues += `${temp.value}->`;
      temp = temp.next;
    }
    return printValues;
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
  remove(index) {
    if (this.isEmpty()) return "List is empty";
    if (index > this.length - 1 || index < 0) return "index out of range";
    if (index === 0) {
      let temp = this.head;
      this.head = temp.next;
      temp.next = null;
      return temp;
    } else {
      if (this) {
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
        return temp;
      }
    }
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

// logger(myLinkedList.insert(98, '123'))
// logger(myLinkedList.insert(-1, '123'))
// logger(myLinkedList.insert(1, '123'))
// logger(myLinkedList.insert(0, 'apple'))

myLinkedList.remove(98);
myLinkedList.remove(-98);
logger(myLinkedList.print());
logger(myLinkedList.remove(0));
logger(myLinkedList.print());
logger(myLinkedList.remove(2));
logger(myLinkedList.print());
