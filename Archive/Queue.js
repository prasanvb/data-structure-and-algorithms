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

/* ------ Queue is FIRST IN FIRST OUT concept  ------- */
class Queue {
  constructor(value) {
    if (value) {
      let newNode = new Node(value);
      this.first = newNode;
      this.last = newNode;
      this.length = 1;
    } else {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    return this;
  }

  // Big O: O(1)
  enqueue(value) {
    // similar to PUSH operation
    if (!value) return undefined;
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // Big O: O(1)
  dequeue() {
    // similar to SHIFT operation
    if (this.length === 0) return undefined;
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}



/* ------ Enqueue example ------ */
let Example_1 = new Queue();

// logger(Example_1);
// logger(Example_1.enqueue(20));
// Example_1.enqueue(30);
// Example_1.enqueue(40);
// logger(Example_1.enqueue(50));

/* ------ Dequeue example ------ */

let Example_2 = new Queue(111);

// Example_2.enqueue(222);
// Example_2.enqueue(333);
// logger(Example_2);
// logger(Example_2.dequeue());
// logger(Example_2);
// logger(Example_2.dequeue());
// logger(Example_2);
// logger(Example_2.dequeue());
// logger(Example_2);
// logger(Example_2.dequeue());
// logger(Example_2);
