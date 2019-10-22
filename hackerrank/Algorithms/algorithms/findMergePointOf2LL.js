// Given pointers to the head nodes of 2 linked lists that merge together at some point, find the Node where the two lists merge. It is guaranteed that the two head Nodes will be different, and neither will be NULL.

// In the diagram below, the two lists converge at Node x:

/*
[List #1] a--->b--->c
                     \
                      x--->y--->z--->NULL
                     /
     [List #2] p--->q
*/

function findMergeNode(headA, headB) {
  let c1 = headA;
  let c2 = headB;

  // this while loop traverses both LLs simultaneously and marks each node as visted
  // and will only end if we reach the end of one of the linked lists(c1 || c1===null)

  // It sets each node.visited to true, and returns the node if it's already true
  // which means it's the merge point

  while (c1 && c2) {
    if (!c1.visited) {
      c1.visited = true;
    } else {
      return c1.data;
    }
    if (!c2.visited) {
      c2.visited = true;
    } else {
      return c2.data;
    }
    c1 = c1.next;
    c2 = c2.next;
  }

  // If the above while loop ends without having found the merge point, the following
  // if statements will continue traversing the LL that has not yet reached null.

  // It follows the same logic as above, returning the node if it has been visited.
  if (c1 !== null) {
    while (c1) {
      if (c1.visited) {
        return c1.data;
      }
      c1 = c1.next;
    }
  }
  if (c2 !== null) {
    while (c2) {
      if (c2.visited) {
        return c2.data;
      }
      c2 = c2.next;
    }
  }
}
