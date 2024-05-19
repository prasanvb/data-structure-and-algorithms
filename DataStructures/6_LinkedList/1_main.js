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
      if (!this.isEmpty()) {
        node.next = this.head;
      }
      this.head = node;
      this.size++;
      return this.head.value;
    }
  
    print() {
      if (!this.head) return null;
      let curr = this.head;
      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  }
  
  const L = new LinkedList();
  console.log("prepend: ", L.prepend());
  console.log("print: ", L.print());
  
  console.log("prepend: ", L.prepend("10"));
  console.log("prepend: ", L.prepend("20"));
  console.log("prepend: ", L.prepend("30"));
  console.log("print: ", L.print());
  
  console.dir(L, { depth: null });
  