
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
// search(value) - O(n)
// insert(index, value) - O(n)
// remove(index) - O(n)
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

  headTail() {
    return { head: this.head.value, tail: this.tail.value };
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

    if (this.size === 1) {
      temp = this.head;
      this.head = null;
      this.tail = null;
    } else {
      temp = this.head;
      this.head = temp.next;
    }

    this.size--;
    return temp.value;
  }

  removeFromEnd() {
    if (this.isEmpty()) return null;

    let temp = this.tail;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;

      while (current.next && current.next.next !== null) {
        current = current.next;
      }

      if (current.next) {
        current.next = null;
        this.tail = current;
      }
    }

    this.size--;
    return temp.value;
  }

  search(value) {
    if (this.isEmpty() || !value) return null;

    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (current.value === value) {
        return currentIndex;
      }
      current = current.next;
      currentIndex++;
    }

    return -1;
  }

  insert(index, value) {
    if (this.isEmpty()) return null;
    if (index < 0 || index > this.size || !value) return null;

    const node = new Node(value);

    if (index === 0) {
      // this.prepend(value);
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let currentIndex = 0;

      while (current.next) {
        current = current.next;
        currentIndex++;
        if (currentIndex === index - 1) {
          if (current.next === null) {
            this.tail = node;
          }
          node.next = current.next;
          current.next = node;
        }
      }
    }

    this.size++;
    return { index, value };
  }

  remove(index) {
    if (this.isEmpty()) return null;
    if (index < 0 || index > this.size) return null;

    let temp;

    if (index === 0) {
      // return this.removeFromFront();
      temp = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;
      let currentIndex = 0;

      while (current) {
        current = current.next;
        currentIndex++;

        if (currentIndex === index - 1) {
          if (current.next === this.tail) {
            this.tail = current;
          }

          temp = current.next;
          current.next = temp.next;
          temp.next = null;
        }
      }
    }

    this.size--;
    return { index, value: temp.value };
  }

  // removeValue()  - O(n)
  // reverse() - O(n)

  print() {
    if (this.isEmpty()) return null;

    let current = this.head;
    let linkedList = "";

    while (current) {
      linkedList += `${current.value} ${current.next ? "-> " : ""}`;
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
console.log("prepend: ", L.prepend("1"));

console.log("append: ", L.append("11"));
console.log("append: ", L.append("12"));
console.log("print: ", L.print());

console.log("removeFromFront: ", L.removeFromFront());
console.log("removeFromEnd: ", L.removeFromEnd());
console.log("print: ", L.print());

console.log("insert: ", L.insert());
console.log("insert: ", L.insert(-1, "x"));
console.log("insert: ", L.insert(100, "x"));
console.log("insert: ", L.insert(0, "1"));
console.log("insert: ", L.insert(3, "10"));
console.log("insert: ", L.insert(5, "12"));
console.log("print: ", L.print());

// console.log("remove: ", L.remove(-1));
// console.log("remove: ", L.remove(100));
console.log("remove: ", L.remove(0));
console.log("remove: ", L.remove(2));
console.log("remove: ", L.remove(3));
console.log("print: ", L.print());
console.log("headTail: ", L.headTail());

// console.log("search: ", L.search("11"));
// console.log("search: ", L.search("100"));
// console.dir(L, { depth: null });
