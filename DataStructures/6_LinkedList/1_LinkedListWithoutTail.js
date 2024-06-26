// Linkedlist without tail (only head)

// INITIAL PARAMETERS
// Node(value) - value, next
// LinkedList - head, size

// LINKEDLIST METHODS
// isEmpty()
// getSize()
// prepend(value) - O(1)
// append(value)  - O(n)
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
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
    return node;
  }

  append(value) {
    if (!value) return null;

    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
    return node;
  }

  insert(index, value) {
    if (index < 0 || index > this.size || !value) return null;

    if (index === 0) {
      return this.prepend(value);
    } else {
      const node = new Node(value);
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = prev.next;
      }

      node.next = current.next;
      current.next = node;
      this.size++;
      return node;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.size) return null;

    let temp;
    let current = this.head;
    let currentIndex = 0;

    // index === 0
    if (currentIndex === index) {
      temp = this.head;
      this.head = temp.next;
      temp.next = null;
      this.size--;
      return { index, temp };
    } else {
      //  0 < index < size
      while (current) {
        current = current.next;
        currentIndex++;

        if (currentIndex === index - 1) {
          temp = current.next;
          current.next = temp.next;
          // current.next = current.next.next;
          temp.next = null;
          this.size--;
          return { index, temp };
        }
      }
    }
  }

  // search for value and return index
  search(value) {
    if (!value) return null;

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

  // remove first matching value
  removeValue(value) {
    if (!value) return null;

    // reuse existing methods
    // let index = this.search(value);
    // if (index > -1) return this.remove(index);
    // return null;

    // two pointer method
    let temp;
    let current = this.head;

    if (this.head.value === value) {
      temp = this.head;
      this.head = this.head.next;
      this.size--;
      return temp.value;
    } else {
      while (current.next && current.next.value !== value) {
        current = current.next;
      }

      if (current.next) {
        temp = current.next;
        current.next = temp.next;
        this.size--;
        return temp.value;
      }
    }

    return -1;
  }

  reverse() {
    // two pointers
    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  print() {
    if (this.isEmpty()) return null;
    let current = this.head;
    let linkedList = "";
    while (current) {
      linkedList += `${current.value} ${current.next ? "->" : ""} `;
      current = current.next;
    }
    return linkedList;
  }
}

const L = new LinkedList();
L.prepend();
L.prepend("3");
L.prepend("2");

L.append();
L.append("11");
L.append("12");

L.insert(0, "1");
L.insert(1, "x");
L.insert(100, "-100");
L.insert(4, "4");
L.insert(7, "200");

console.log("print: ", L.print());

// console.log("remove: ", L.remove(10));
// console.log("remove: ", L.remove(7));
// console.log("remove: ", L.remove(4));
// console.log("remove: ", L.remove(0));

// console.log("print: ", L.print());
// console.log("search: ", L.search("99"));
// console.log("search: ", L.search("12"));

// console.log("print: ", L.print());
// console.log("removeValue: ", L.removeValue("2"));
// console.log("removeValue: ", L.removeValue("200"));
// console.log("removeValue: ", L.removeValue("12"));

// console.log("print: ", L.print());
// L.reverse();
// console.log("print: ", L.print());

// console.dir(L, { depth: null });
