// Stack Array 

// **
// STACK METHODS
// push(value) - O(n)
// pop() - O(n)
// isEmpty()
// peek()
// size()
// print()
// **


class Stack {
    constructor() {
        this.table = [];
    }

    push(value) {
        this.table.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.table.pop();
    }

    isEmpty() {
        return this.table.length === 0;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.table[this.table.length - 1];
    }

    size() {
        return this.table.length;
    }

    print() {
        return this.table.toString();
    }
}

const S = new Stack();

console.log("peek: ", S.peek());
console.log("isEmpty: ", S.isEmpty());
console.log("size: ", S.size());

S.push("10");
S.push("20");
S.push("30");
S.push("40");

console.log("pop: ", S.pop());

console.log("peek: ", S.peek());
console.log("isEmpty: ", S.isEmpty());
console.log("size: ", S.size());

console.log(S);
console.log("print: ", S.print());
