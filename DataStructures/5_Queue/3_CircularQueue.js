// Circular Queue

// The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element
// Also referred to as circular buffer or ring buffer and follows the FIFO principle
// A circular queue will reuse the empty block created during the dequeue operation When working with queues of fixed maximum size, a circular queue is a great implementation choice
// The Circular Queue data structure supports two main operations
//   • Enqueue, which adds an element to the rear/tail of the collection
//   • Dequeue, which removes an element from the front/head of the collection
// Usage - AWS FIFO queue, streaming data packets, playlist

class CircularQueue {
  constructor(capacity) {
    this.obj = {};
    this.rear = 0;
    this.front = 0;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  enqueue(value) {
    if (this.currentLength === this.capacity) return null;
    this.obj[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    this.currentLength++;
    return value;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.obj[this.front];
    delete this.obj[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    return item;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.obj[this.front];
  }

  size() {
    return this.currentLength;
  }

  print() {
    return Object.values(this.obj);
  }
}

const CQ = new CircularQueue(5);

console.log("peek: ", CQ.peek());
console.log("isEmpty: ", CQ.isEmpty());
console.log("size: ", CQ.size());

console.log("dequeue: ", CQ.dequeue());

console.log("enqueue: ", CQ.enqueue(10));
// console.log(CQ);
console.log("enqueue: ", CQ.enqueue(20));
// console.log(CQ);
console.log("enqueue: ", CQ.enqueue(30));
// console.log(CQ);
console.log("enqueue: ", CQ.enqueue(40));
// console.log(CQ);
console.log("enqueue: ", CQ.enqueue(50));
console.log(CQ);
console.log("enqueue: ", CQ.enqueue(60));
// console.log(CQ);
console.log("dequeue: ", CQ.dequeue());
console.log(CQ);
console.log("dequeue: ", CQ.dequeue());
console.log(CQ);

console.log("peek: ", CQ.peek());
console.log("isEmpty: ", CQ.isEmpty());
console.log("size: ", CQ.size());
CQ.enqueue(60);
console.log(CQ);
