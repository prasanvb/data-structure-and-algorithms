function logger(value) {
  console.dir(value, { depth: null });
  console.log("-----------------------");
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    if (value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    return this;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head || !this.tail || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head || !this.tail || this.length === 0) {
      console.error("Linked List is empty");
      return undefined;
    }
    let temp = this.head;
    let pre = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    if (value) {
      const newNode = new Node(value);
      if (!this.head || !this.tail || this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
    }
    return this;
  }

  shift() {
    if (!this.head || !this.tail || this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next; // pay close attention here
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    let parsedIndex = parseInt(index);
    if (parsedIndex < 0 || parsedIndex >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < parsedIndex; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    let parsedIndex = parseInt(index);
    if (parsedIndex < 0 || parsedIndex >= this.length) return undefined;
    if (parsedIndex === 0) return this.unshift(value);
    if (parsedIndex === this.length - 1) return this.push(value);
    const newNode = new Node(value);
    // if (parsedIndex > 0) {
    //   let temp = this.head;
    //   let pre = temp;
    //   for (let i = 0; i < parsedIndex; i++) {
    //     pre = temp;
    //     temp = temp.next;
    //   }
    //   pre.next = newNode;
    //   newNode.next = temp;
    //   this.length++;
    // }
    // Alternative Approach
    let temp = this.get(index - 1);
    if (temp) {
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
    }
    return this;
  }

  remove(index) {
    let parsedIndex = parseInt(index);
    if (parsedIndex < 0 || parsedIndex >= this.length) return undefined;
    if (parsedIndex === 0) return this.shift();
    if (parsedIndex === this.length - 1) return this.pop();
    let temp = this.get(index);
    let pre = this.get(index - 1);
    if (temp) {
      pre.next = temp.next;
      temp.next = null;
      this.length--;
    }
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let preNode = null;
    let nextNode = temp.next;
    for (let i = 0; i < this.length; i++) {
      nextNode = temp.next;
      temp.next = preNode;
      preNode = temp;
      temp = nextNode;
    }
    return this;
  }
}

/* ------ Create new LinkedList ------ */
let Example_1 = new LinkedList(21);
Example_1.push(90);
Example_1.push(100);
// logger(Example_1);

/* ------ PUSH method ------ */
let Example_2 = new LinkedList();
// logger(Example_2);
Example_2.push(2);
// logger(Example_2);

/* ------ POP method ------ */
let Example_3 = new LinkedList(2);
Example_3.push(5);
// logger(Example_3);
// logger(Example_3.pop());
// logger(Example_3);
// logger(Example_3.pop());
// logger(Example_3);
// logger(Example_3.pop());

/* ------ UNSHIFT method ------ */
let Example_4 = new LinkedList(10);
Example_4.unshift(9);
Example_4.push(12);
Example_4.unshift(100);
// logger(Example_4);

/* ------ SHIFT method ------ */
let Example_5 = new LinkedList(76);
Example_5.push(4);
Example_5.push(65);
// logger(Example_5);
// logger(Example_5.shift());
// logger(Example_5);
// logger(Example_5.shift());
// logger(Example_5);
// logger(Example_5.shift());
// logger(Example_5);

/* ------ GET method ------ */
let Example_6 = new LinkedList(100);
Example_6.push(134);
Example_6.push(208);
Example_6.push(312);
// logger(Example_6);
// logger(Example_6.get(1));

/* ------ SET method ------ */
let Example_7 = new LinkedList(100);
Example_7.push(134);
Example_7.push(208);
Example_7.push(312);
// logger(Example_7);
// logger(Example_7.set(3, 1000009));
// logger(Example_7);

/* ------ INSERT method ------ */
let Example_8 = new LinkedList(10);
Example_8.push(11);
Example_8.push(12);
// logger(Example_8);
// logger(Example_8.insert(2, 99));
// logger(Example_8.insert(4, 70));

/* ------ REMOVE method ------ */
let Example_9 = new LinkedList(20);
Example_9.push(21);
Example_9.push(22);
Example_9.push(23);
Example_9.push(24);
Example_9.push(25);
// logger(Example_9);
// logger(Example_9.remove(0));
// logger(Example_9);
// logger(Example_9.remove(2));
// logger(Example_9);
// logger(Example_9.remove(4));

/* ------ REVERSE method ------ */
let Example_10 = new LinkedList(30);
Example_10.push(31);
Example_10.push(32);
Example_10.push(33);
logger(Example_10);
logger(Example_10.reverse());
