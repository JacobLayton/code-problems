//www.hackerrank.com/challenges/swap-nodes-algo/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

// Complete the swapNodes function in the editor below. It should return a two-dimensional array where each element is an array of integers representing the node indices of an in-order traversal after a swap operation.

https: function swapNodes(indexes, queries) {
  class Node {
    constructor(data, depth) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.depth = depth;
    }
  }

  let response = [];

  const queriesLen = queries.length;
  const indexesLen = indexes.length;
  const nodes = [new Node(1, 1)];

  function createNode(value, root, position) {
    if (value > -1) {
      const depth = root.depth + 1;
      const node = new Node(value, depth);
      root[position] = node;
      nodes.push(node);
    }
  }

  function swapNode(k) {
    const temp = nodes[k].left;
    nodes[k].left = nodes[k].right;
    nodes[k].right = temp;
  }

  function inOrder(_root) {
    const result = [];
    const action = (root) => {
      if (root !== null) {
        action(root.left);
        result.push(root.data);
        action(root.right);
      }
    };
    action(_root);
    return result;
  }

  for (let i = 0; i < indexesLen; i++) {
    createNode(indexes[i][0], nodes[i], "left");
    createNode(indexes[i][1], nodes[i], "right");
  }

  for (let i = 0; i < queriesLen; i++) {
    const jump = queries[i];
    for (let k = 0; k < nodes.length; k++) {
      const node = nodes[k];
      if (0 === node.depth % jump) {
        //console.log('swapNode', node.data), jump;
        swapNode(k);
      }
    }
    response.push(inOrder(nodes[0]));
  }
  return response;
}

console.log(
  swapNodes(
    [
      [2, 3],
      [-1, -1],
      [-1, -1],
    ],
    [1, 1]
  )
); // Should return [ [ 3, 1, 2 ], [ 2, 1, 3 ] ]
