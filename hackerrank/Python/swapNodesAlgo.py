# https://www.hackerrank.com/challenges/swap-nodes-algo/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search


def swapNodes(indexes, queries):
    class Node:
        def __init__(self, data, left, right, depth):
            self.data = data
            self.left = None
            self.right = None
            self.depth = depth

    response = []

    queriesLen = len(queries)
    indexesLen = len(indexes)
    nodes = [Node(1, 1)]

    def createNode(value, root, position):
        if value > -1:
            depth = root.depth + 1
            node = Node(value, depth)
            root[position] = node
            nodes.append(node)

    def swapNode(k):
        temp = nodes[k].left
        nodes[k].left = nodes[k].right
        nodes[k].right = temp

    def inOrder(_root):
        result = []

        def action(root):
            if root != None:
                action(root.left)
                result.append(root.data)
                action(root.right)
        action(_root)
        return result

    for i in range(0, indexesLen):
        createNode(indexes[i][0], nodes[i], "left")
        createNode(indexes[i][1], nodes[i], "right")

    for i in range(0, queriesLen):
        jump = queries[i]
        for k in range(0, len(nodes)):
            node = nodes[k]
            if node.depth % jump == 0:
                swapNode(k)
        response.append(inOrder(nodes[0]))

    return response


print(swapNodes(
    [
      [2, 3],
      [-1, -1],
      [-1, -1],
      ],
    [1, 1]
))  # Should return [ [ 3, 1, 2 ], [ 2, 1, 3 ] ]
