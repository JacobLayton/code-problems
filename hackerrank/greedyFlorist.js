//www.hackerrank.com/challenges/greedy-florist/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

// Complete the getMinimumCost function in the editor below. It should return the minimum cost to purchase all of the flowers.

https: function getMinimumCost(k, c) {
  console.log(c);
  let cost = 0;
  let n = 1;
  let count = Math.ceil(c.length / k);
  let descArr = c.sort((a, b) => b - a);

  while (n <= count) {
    cost += n * descArr.splice(0, k).reduce((acc, m) => (acc += m));
    n++;
  }
  return cost;
}

console.log(getMinimumCost(3, [2, 5, 6])); // should return 13
console.log(getMinimumCost(2, [2, 5, 6])); // should return 15
console.log(getMinimumCost(3, [1, 3, 5, 7, 9])); // should return 29
