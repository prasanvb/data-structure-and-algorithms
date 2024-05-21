
// Linkedlist without tail (only head)

// INITIAL PARAMETERS
// Node(value) - value, next
// head, size

// LINKEDLIST METHODS
// isEmpty()
// getSize()
// prepend(value) - O(1)
// append(value) - O(1)
// removeFromFront() - O(1)
// removeFromEnd() - O(1)
// insert(index, value) - O(n)
// remove(index) - O(n)
// search(value) - O(n)
// removeValue(value) - O(n)
// reverse() - O(n)
// print() - O(n)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    if (!value) return null;

    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
    return value;
  }

  append(value) {
    if (!value) return null;

    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
    return value;
  }

  removeFromFront() {
    if (this.isEmpty()) return null;

    let temp;
    temp = this.head;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.size--;
    return temp.value;
  }

  removeFromEnd() {
    if (this.isEmpty()) return null;

    let temp;
    temp = this.tail;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;

      while (prev.next && prev.next.next !== null) {
        prev = prev.next;
      }

      if (prev) {
        prev.next = null;
        this.tail = prev;
      }
    }

    this.size--;
    return temp.value;
  }

  print() {
    if (this.isEmpty()) return null;

    let current = this.head;
    let linkedList = "";

    while (current) {
      linkedList += `${current.value} ${current.next ? "->" : ""}`;
      current = current.next;
    }

    return { size: this.size, linkedList };
  }
}

const L = new LinkedList();
console.log("prepend: ", L.prepend());
console.log("print: ", L.print());

console.log("prepend: ", L.prepend("100"));
console.log("removeFromFront: ", L.removeFromFront());

console.log("append: ", L.append("200"));
console.log("removeFromEnd: ", L.removeFromEnd());

console.log("prepend: ", L.prepend("3"));
console.log("prepend: ", L.prepend("2"));

console.log("append: ", L.append("11"));
console.log("append: ", L.append("12"));
console.log("print: ", L.print());

console.log("removeFromFront: ", L.removeFromFront());
console.log("removeFromEnd: ", L.removeFromEnd());

console.log("print: ", L.print());
// console.dir(L, { depth: null });
