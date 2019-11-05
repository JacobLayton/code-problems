// Given a reference to the head of a doubly-linked list and an integer, data, create a new DoublyLinkedListNode object having data value data and insert it into a sorted linked list while maintaining the sort.

function sortedInsert(head, data) {
  // assign a current value to head
  // this is used to keep track of where we currently are in the linked list
  let current = head;

  // what do we do if data should be inserted at the beginning of DLL?
  const newNode = new DoublyLinkedListNode();
  newNode.data = data;
  newNode.next = head;

  if (data < head.data) {
      head.prev = newNode;
      return newNode;
  }

  // iterate through our dll one by one
  while (current) {
      // compare the input data and the value of current node
      // if the input data < current node's data
      if (data < current.data) {
          // put input data in a node
          // connect this node to the prev and next nodes at this spot
          newNode.next = current;
          newNode.prev = current.prev;
          current.prev.next = newNode;
          current.prev = newNode;
          break;
      } else if (current.next === null) {
          // if the current node is null
              // then we've reached the end of the list
              // make the input data the new tail
              current.next = newNode;
              newNode.prev = current;
              newNode.next = null;
              break;
      }
      current = current.next;
  }

  // return the head
  return head;

}