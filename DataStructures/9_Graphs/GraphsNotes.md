# Graphs

• Consists of nodes (vertices) than can be connected in arbitrary ways (edges)
• For example, friends in a social network, paths in a city, networks in general
• Traversal strategies include Breadth-First-Search (BFS) and Depth-First-Search (DFS)

- Graphs have vertexes (i.e. also called Node) and edges (i.e. also called as Connection).
- Any vertex is connected to another vertex by an edge. A vertex can be connected to any number of vertexes.
- Each edge can carry a specific weight.
- Connection between vertexes can be bi-directional or uni-directional.
- Typically Trees, LinkedList and few other data structures can also be classified as graphs.
- Graphs can be represents as Adjacency Matrix or Adjacency List.
- Sample Adjacency List:
  > {
  > A:['B','C'],
  > B:['A','C'],
  > C: ['A','B']
  > }
- Big O
  - Space Complexity of
    - Adjacency Matrix is in-efficient
    - Adjacency List is efficient
  - Time Complexity
    - Adjacency Matrix
      - Adding a vertex: O(|V|^2)
      - Adding an edge: O(1)
      - Removing an edge: O(1)
      - Removing an vertex: O(|V|^2)
    - Adjacency List
      - Adding a vertex: O(1)
      - Adding an edge: O(1)
      - Removing an edge: O(|E|)
      - Removing an vertex: O(|V|+|E|)
