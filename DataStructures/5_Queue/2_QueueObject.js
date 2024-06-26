// Queue Object

// INITIAL PARAMETERS
// Queue() - obj, front, rear, length

// **
// QUEUE METHODS
// enqueue(value) - O(1)
// dequeue() - O(1)
// isEmpty()
// peek()
// size()
// print()
// **

class Queue {
  constructor() {
    this.obj = {};
    this.front = 0;
    this.rear = 0;
    this.length = 0;
  }

  enqueue(value) {
    this.obj[this.rear] = value;
    this.rear++;
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.obj[this.front];
    delete this.obj[this.front];
    this.front++;
    this.length--;
    return item;
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.obj[this.front];
  }

  size() {
    return this.length;
  }

  print() {
    return this.obj;
  }
}

const Q = new Queue();

console.log("peek: ", Q.peek());
console.log("isEmpty: ", Q.isEmpty());
console.log("size: ", Q.size());

console.log("dequeue: ", Q.dequeue());

Q.enqueue(10);
Q.enqueue(20);
Q.enqueue(30);
Q.enqueue(40);
console.log(Q);

console.log("dequeue: ", Q.dequeue());

console.log("peek: ", Q.peek());
console.log("isEmpty: ", Q.isEmpty());
console.log("size: ", Q.size());

console.log("print: ", Q.print());
console.log(Q);