// https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues

function processData(input) {
  const inputs = input.split("\n");
  const inQueue = [];
  const outQueue = [];

  function inQueueToOutQueue() {
    if (outQueue.length === 0) {
      while (inQueue.length !== 0) {
        outQueue.push(inQueue.pop());
      }
    }
  }

  for (let i = 1; i <= inputs[0]; i++) {
    let query = inputs[i].split(" ");
    switch (query[0]) {
      case "1":
        inQueue.push(query[1]);
        break;
      case "2":
        inQueueToOutQueue();
        outQueue.pop();
        break;
      case "3":
        inQueueToOutQueue();
        console.log(outQueue[outQueue.length - 1]);
        break;
    }
  }
}

console.log(processData("10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2")); // Should return 14 14
