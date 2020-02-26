# https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues


class MyQueue(object):
    def __init__(self):
        self.inQueue = []
        self.outQueue = []

    def peek(self):
        self.inQueueToOutQueue()
        return self.outQueue[-1]

    def pop(self):
        self.inQueueToOutQueue()
        return self.outQueue.pop()

    def put(self, value):
        self.inQueue.append(value)

    def inQueueToOutQueue(self):
        if len(self.outQueue) == 0:
            while len(self.inQueue) > 0:
                self.outQueue.append(self.inQueue.pop())


queue = MyQueue()
t = int(input())
for line in range(t):
    values = map(int, input().split())
    values = list(values)
    if values[0] == 1:
        queue.put(values[1])
    elif values[0] == 2:
        queue.pop()
    else:
        print(queue.peek())
