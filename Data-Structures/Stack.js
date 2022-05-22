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

class Stack {
  constructor(value) {
    if (value) {
      let newNode = new Node(value);
      this.top = newNode;
      this.height = 1;
    } else {
      this.top = null;
      this.height = 0;
    }
    return this;
  }

  pushStack(value) {
    if (!value) return undefined;
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.height++;
    return this;
  }

  popStack() {
    if (this.height === 0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.height--;
    return temp;
  }
}

/* ------ Stack Creation  ------- */
let Example_1 = new Stack(10);
Example_1.pushStack(20);
Example_1.pushStack(30);
Example_1.pushStack(40);

logger(Example_1);
logger(Example_1.popStack());
logger(Example_1);
logger(Example_1.popStack());
logger(Example_1);
