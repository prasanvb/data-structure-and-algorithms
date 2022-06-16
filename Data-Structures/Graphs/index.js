function logger(value) {
  console.dir(value, { depth: null });
  console.log("-----------------------");
}

// note: All the edges in the graph are bi-directional
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex_1, vertex_2) {
    if (this.adjacencyList[vertex_1] && this.adjacencyList[vertex_2]) {
      this.adjacencyList[vertex_1].push(vertex_2);
      this.adjacencyList[vertex_2].push(vertex_1);
      return true;
    }
    return false;
  }

  removeEdge(vertex_1, vertex_2) {
    if (this.adjacencyList[vertex_1] && this.adjacencyList[vertex_2]) {
      this.adjacencyList[vertex_1] = this.adjacencyList[vertex_1].filter(
        (v) => v !== vertex_2
      );
      this.adjacencyList[vertex_2] = this.adjacencyList[vertex_2].filter(
        (v) => v !== vertex_1
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex] && this.adjacencyList[vertex].length) {
      this.adjacencyList[vertex].forEach((edge) => {
        this.removeEdge(vertex, edge);
      });
      delete this.adjacencyList[vertex];
      return true;
    }
    return false;

    // Alternative Approach
    // if (!this.adjacencyList[vertex]) return undefined
    // while(this.adjacencyList[vertex].length) {
    //     let temp = this.adjacencyList[vertex].pop()
    //     this.removeEdge(vertex, temp)
    // }
    // delete this.adjacencyList[vertex]
    // return this
  }
}

let myGraph_1 = new Graph();
myGraph_1.addVertex("A");
myGraph_1.addVertex("A");
myGraph_1.addVertex("B");
myGraph_1.addEdge("A", "B");
myGraph_1.addEdge("A", "C");
myGraph_1.addVertex("C");
myGraph_1.addEdge("A", "C");
myGraph_1.addEdge("B", "C");
logger(myGraph_1);
myGraph_1.removeEdge("B", "C");
logger(myGraph_1);
myGraph_1.addVertex("D");
logger(myGraph_1);
myGraph_1.addEdge("D", "A");
myGraph_1.addEdge("D", "B");
myGraph_1.addEdge("D", "C");
logger(myGraph_1);
logger(myGraph_1.removeVertex("D"));
logger(myGraph_1);
logger(myGraph_1.removeVertex("D"));
