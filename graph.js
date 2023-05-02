class Graph {
  constructor() {
    this.adjancencyList = {};
  }
  addVertex (vertex) {
    if (!this.adjancencyList[vertex]) {
      this.adjancencyList[vertex] = new Set();
    }
  }
  addEdge(fromVertex, toVertex) {
    if (!this.adjancencyList[fromVertex]) {
      this.addVertex(fromVertex);
    }
    if (!this.adjancencyList[toVertex]) {
      this.addVertex(toVertex);
    }
    this.adjancencyList[fromVertex].add(toVertex);
    this.adjancencyList[toVertex].add(fromVertex);
  }
}

//Directed Graph, 1 direction
//Undirected Graph, edges are bidirectional

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
console.log(graph);

graph.addEdge('A', 'C');
graph.addEdge('D','A');
console.log(graph);