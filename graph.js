class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(fromVertex, toVertex) {
    if (!this.adjacencyList[fromVertex]) {
      this.addVertex(fromVertex);
    }
    if (!this.adjacencyList[toVertex]) {
      this.addVertex(toVertex);
    }
    this.adjacencyList[fromVertex].add(toVertex);
    this.adjacencyList[toVertex].add(fromVertex);
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`)
    }
  }
  hasEdge(vertex1, vertex2) {
    return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1))
  }
  removeEdge(fromVertex, toVertex) {
    this.adjacencyList[fromVertex].delete(toVertex);
    this.adjacencyList[toVertex].delete(fromVertex);
  }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(adjacentVertex, vertex);
      }
    }
    delete this.adjacencyList[vertex];
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
graph.addEdge('B','A');
console.log(graph);

// graph.display();

console.log(graph.hasEdge('A', 'B'));
console.log(graph.hasEdge('A', 'C'));

graph.removeEdge('A','C');
// graph.display();
graph.removeVertex('A');
graph.display();