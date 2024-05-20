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
    if (index === 0) return this.prepend(value);

    const node = new Node(value);
    let current = this.head;
    let currentIndex = 0;

    while (current) {
      current = current.next;
      currentIndex++;
      if (currentIndex === index - 1) {
        node.next = current.next;
        current.next = node;
        this.size++;
        return node;
      }
    }
  }

  remove(index) {
    if (index < 0 || index >= this.size) return null;

    let current = this.head;
    let currentIndex = 0;
    let temp;

    // index === 0
    if (currentIndex === index) {
      temp = this.head;
      // this.head = temp.next;
      this.head = this.head.next;
      temp.next = null;
    }

    //  0 < index < size
    while (current) {
      current = current.next;
      currentIndex++;
      if (currentIndex === index - 1) {
        temp = current.next;
        current.next = temp.next;
        // current.next = current.next.next;
        temp.next = null;
      }
    }

    this.size--;
    return { index, temp };
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
      currentIndex++;
      current = current.next;
    }

    return -1;
  }

  // remove first matching value
  removeValue(value) {
    let index = this.search(value);
    if (index > -1) {
      return this.remove(index);
    }
    return null;
  }

  reverse() {
    if (this.isEmpty()) return null;
    let current = this.head;
    let temp;
    let prev;
    while(current){
      temp = current;
      temp.next = null;
      current = current.next
      prev = current;
      prev.next = temp;
      
      console.log({temp, temp, current})
    }
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
console.log("prepend: ", L.prepend());
console.log("print: ", L.print());

console.log("insert: ", L.insert(0, "10"));

console.log("prepend: ", L.prepend("3"));
console.log("prepend: ", L.prepend("2"));

console.log("append: ", L.append("11"));
console.log("append: ", L.append("12"));

console.log("insert: ", L.insert(0, "1"));
console.log("insert: ", L.insert(100, "-100"));
console.log("insert: ", L.insert(3, "4"));
console.log("insert: ", L.insert(7, "200"));

console.log("print: ", L.print());
console.log("remove: ", L.remove(10));
console.log("remove: ", L.remove(7));
console.log("remove: ", L.remove(4));
console.log("remove: ", L.remove(0));

console.log("print: ", L.print());
console.log("search: ", L.search("99"));
console.log("search: ", L.search("12"));

console.log("removeValue: ", L.removeValue("99"));
console.log("removeValue: ", L.removeValue("4"));

console.log("print: ", L.print());
L.reverse();

console.dir(L, { depth: null });
