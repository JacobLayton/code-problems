//www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

// Complete the minimumAbsoluteDifference function in the editor below. It should return an integer that represents the minimum absolute difference between any pair of elements.

https: function minimumAbsoluteDifference(arr) {
  let sortedArr = arr.sort();

  let minAbsDiff = Math.abs(sortedArr[0] - sortedArr[1]);

  for (let i = 1; i < sortedArr.length - 1; i++) {
    let currentAbsDiff = Math.abs(sortedArr[i] - sortedArr[i + 1]);
    if (currentAbsDiff < minAbsDiff) {
      minAbsDiff = currentAbsDiff;
    }
  }

  return minAbsDiff;
}

console.log(minimumAbsoluteDifference([3, -7, 0])); // should return 3
console.log(
  minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])
); // should return 1
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17])); // should return 3
