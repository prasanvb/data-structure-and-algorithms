// # STACK

// - NOTE: You can implement the Stack data structure simply using an array
// - Stack is `FIRST IN LAST OUT` concept
// - Each node has `value` and `next` property
// - Each Stack has `top` identifier and `height`
// - Stack Methods
//   - `pushToStack(value)` - Big O: O(1) (Similar to `unshift` operation)
//   - `popStack()` - Big O: O(1)  (Similar to `shift` operation)
  
  
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

/* ------ Stack is FIRST IN LAST OUT concept  ------- */
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

  // Big O: O(1)
  pushStack(value) {
    // similar to UNSHIFT operation
    if (!value) return undefined;
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.height++;
    return this;
  }

  // Big O: O(1)
  popStack() {
    // similar to SHIFT operation
    if (this.height === 0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.height--;
    return temp;
  }
}



let Example_1 = new Stack(10);
Example_1.pushStack(20);
Example_1.pushStack(30);
Example_1.pushStack(40);

// logger(Example_1);
// logger(Example_1.popStack());
// logger(Example_1);
// logger(Example_1.popStack());
// logger(Example_1);
