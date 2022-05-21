function logger(value) {
  console.dir(value, { depth: null });
  // console.dir(value, { depth: null, colors: true });
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

  push(value) {
    if (value) {
      let newNode = new Node(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
      }
      this.length++;
    }
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
      temp.previous = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    if (value) {
      let newNode = new Node(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
    }
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    let parsedIndex = parseInt(index);
    let temp = this.head;
    if (this.length === 0 || parsedIndex < 0 || parsedIndex >= this.length) {
      return undefined;
    } else if (parsedIndex < this.length / 2) {
      for (let i = 0; i < parsedIndex; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > parsedIndex; i--) {
        temp = temp.previous;
      }
    }
    return temp;
  }

  insert(index, value) {
    let parsedIndex = parseInt(index);
    if (this.length === 0 || parsedIndex < 0 || parsedIndex >= this.length)
      return undefined;
    if (parsedIndex === 0) return this.unshift(value);
    if (parsedIndex === this.length - 1) return this.push(value);
    let newNode = new Node(value);
    let before = this.get(parsedIndex - 1);
    let after = this.get(parsedIndex + 1);
    if (before && after) {
      newNode.previous = before;
      newNode.next = after;
      before.next = newNode;
      after.previous = newNode;
      this.length++;
    }
    return this;
  }

  remove(index) {
    let parsedIndex = parseInt(index);
    if (this.length === 0 || parsedIndex < 0 || parsedIndex >= this.length)
      return undefined;
    if (parsedIndex === 0) return this.shift();
    if (parsedIndex === this.length - 1) return this.pop();
    let temp = this.get(parsedIndex);
    if (temp) {
      temp.previous.next = temp.next; // Notice the nested objects are assigned
      temp.next.previous = temp.previous; // Notice the nested objects are assigned
      temp.previous = null;
      temp.next = null;
      this.length--;
      return temp;
    }
  }
}

/* ------ DoubleLinkedList Creation ------ */
let dll = new DoubleLinkedList(90);
// logger(dll);
// logger(new DoubleLinkedList());

/* ------ PUSH example ------ */
let dllExample_1 = new DoubleLinkedList();
dllExample_1.push(76);
dllExample_1.push(98);
dllExample_1.push(45);
// logger(dllExample_1);

/* ------ POP example ------ */
let dllExample_2 = new DoubleLinkedList(60);
dllExample_2.push(76);
// logger(dllExample_2);
// logger(dllExample_2.pop());
// logger(dllExample_2);
// logger(dllExample_2.pop());
// logger(dllExample_2);

/* ------ UNSHIFT example ------ */
let dllExample_3 = new DoubleLinkedList();
// logger(dllExample_3.unshift(86));
// logger(dllExample_3.unshift(23));
// logger(dllExample_3.unshift(27));
// logger(dllExample_3.shift(27));
// logger(dllExample_3);

/* ------ SHIFT example ------ */
let dllExample_4 = new DoubleLinkedList(34);
dllExample_4.push(98);
dllExample_4.push(832);
// logger(dllExample_4);
// logger(dllExample_4.shift());
// logger(dllExample_4);
// logger(dllExample_4.shift());
// logger(dllExample_4);
// logger(dllExample_4.shift());
// logger(dllExample_4);
// logger(dllExample_4.shift());

/* ------ GET & SET example ------ */
let dllExample_5 = new DoubleLinkedList(34);
dllExample_5.push(98);
dllExample_5.push(62);
dllExample_5.push(18);
dllExample_5.push(870);

// logger(dllExample_5);
// logger(dllExample_5.get(8));
// logger(dllExample_5.get(-1));
// logger(dllExample_5.get(1));
// logger(dllExample_5.get(3));

// logger(dllExample_5.set(1, 100));
// logger(dllExample_5.set(9, 100));

/* ------ INSERT & REMOVE example ------ */
let dllExample_6 = new DoubleLinkedList(10);
dllExample_6.push(11);
dllExample_6.push(12);
dllExample_6.push(13);
dllExample_6.push(14);

// logger(dllExample_6);
// logger(dllExample_6.insert(-1, 8888));
// logger(dllExample_6.insert(7, -1111));
// logger(dllExample_6.insert(0, 1000));
// logger(dllExample_6.insert(5, 9999));
// logger(dllExample_6.insert(2, 121212));
// logger(dllExample_6.insert(4, 606060));

logger(dllExample_6);
logger(dllExample_6.remove(2));
logger(dllExample_6.remove(0));
logger(dllExample_6.remove(2));
logger(dllExample_6.remove(9));
logger(dllExample_6);
