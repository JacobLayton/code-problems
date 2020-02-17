//www.hackerrank.com/challenges/angry-children/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

// Complete the maxMin function in the editor below. It must return an integer that denotes the minimum possible value of unfairness.

https: function maxMin(k, arr) {
  let minFairness = 9999999999;

  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr.length - k + 1; i++) {
    let curFairness = sortedArr[i + k - 1] - sortedArr[i];
    if (curFairness < minFairness) {
      minFairness = curFairness;
    }
  }

  return minFairness;
}

console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30])); // Should return 20
console.log(maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200])); // Should return 3
console.log(maxMin(2, [1, 2, 1, 2, 1])); // Should return 0
