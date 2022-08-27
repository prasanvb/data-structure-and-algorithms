function logger(value)  {
  return console.dir(value, {depth: Number.MAX_VALUE})
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularQueue {
  constructor(capacity) {
    if(capacity < 1) return 'capacity should be always greater 1'
    this.capacity = capacity;
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  
  isEmpty() {
    if(this.length === 0) return true;
    return false
  }
  
  isFull() {
    if(this.length >= this.capacity) return true;
    return false;
  }
  
  enqueue(value) {
    if(!this.isFull()) {
      if(this.isEmpty()) {
        let node = new Node(value);
        this.first = node;
        this.last = this.first;
        this.length ++;
      } 
      else {
        let node = new Node(value);
        this.last.next = node;
        this.last = node;
        this.length ++;
      }
    } 
    else {
      return 'Queue is full'
    }
    return this;
  }
  
  dequeue() {
    if(this.isEmpty()) return 'queue is empty'
    if(this.length === 1 ) this.last = null;
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length --;
    return temp;
  }
  
  print() {
    let printCQ = []
    if(!this.isEmpty()){
      let temp = this.first;
      for(let i = 0; i < this.length; i++) {
        printCQ.push(temp.value);
        temp = temp.next;
      } 
      return printCQ;
    }
    return 'queue is empty'
  }

  peek(index) {
    let val = null;
    if(!this.isEmpty()){
      let temp = this.first;
      for(let i = 0; i < this.length; i++) {
        if(index === i){
          val = temp.value;
        }
        temp = temp.next;
      } 
    }
  return val;
  }
}

let myCQueue = new CircularQueue(5);

myCQueue.enqueue('apple');
myCQueue.enqueue('mango');
myCQueue.enqueue('orange');
myCQueue.enqueue('banana');
myCQueue.enqueue('strawberry');

logger(myCQueue.enqueue('blueberry'));
logger(myCQueue.enqueue('blackberry'));

logger(myCQueue);

logger(myCQueue.print());
logger(myCQueue.dequeue());

logger(myCQueue.peek(0));
logger(myCQueue);

logger(myCQueue.dequeue());
logger(myCQueue.dequeue());
logger(myCQueue.dequeue());
logger(myCQueue.dequeue());
logger(myCQueue.dequeue());

logger(myCQueue);

logger(myCQueue.print());