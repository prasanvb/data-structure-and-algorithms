// Queue
// The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO)
// The first element inserted into the queue is first element to be removed
// A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/ head).
// Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model
// The Queue data structure supports two main operations
//   • Enqueue, which adds an element to the rear/tail of the collection
//   • Dequeue, which removes an element from the front/head of the collection

class Queue {
    constructor() {
        this.table = [];
    }

    enqueue(value) {
        return !!this.table.push(value);
    }

    dequeue() {
        return this.table.shift();
    }

    isEmpty() {
        return this.table.length === 0;
    }

    peak() {
        if (this.isEmpty()) {
            return null;
        }
        return this.table[0];
    }

    size() {
        return this.table.length;
    }

    printQueue() {
        return this.table.toString();
    }
}

const Q = new Queue();

console.log("peak: ", Q.peak());
console.log("isEmpty: ", Q.isEmpty());
console.log("size: ", Q.size());

console.log("enqueue: ", Q.enqueue(10));
console.log("enqueue: ", Q.enqueue(20));
console.log("enqueue: ", Q.enqueue(30));
console.log("enqueue: ", Q.enqueue(40));

console.log("dequeue: ", Q.dequeue());

console.log("peak: ", Q.peak());
console.log("isEmpty: ", Q.isEmpty());
console.log("size: ", Q.size());

console.log("printQueue: ", Q.printQueue());
