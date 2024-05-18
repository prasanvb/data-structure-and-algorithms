class Stack {
    constructor() {
        this.obj = {};
        this.head = 0;
    }

    push(value) {
        this.obj[this.head] = value;
        this.head++;
    }

    pop() {
        const item = this.obj[this.head - 1];
        delete this.obj[this.head - 1];
        this.head--;
        return item;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.obj[this.head - 1];
    }

    size() {
        return this.head;
    }

    isEmpty() {
        return this.head === 0;
    }

    print() {
        return this.obj;
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
