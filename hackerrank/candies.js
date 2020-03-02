// https://www.hackerrank.com/challenges/candies/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming

/* Alice is a kindergarten teacher. She wants to give some candies to the children in her class.  All the children sit in a line and each of them has a rating score according to his or her performance in the class.  Alice wants to give at least 1 candy to each child. If two children sit next to each other, then the one with the higher rating must get more candies. Alice wants to minimize the total number of candies she must buy.

For example, assume her students' ratings are [4, 6, 4, 5, 6, 2]. She gives the students candy in the following minimal amounts: [1, 2, 1, 2, 3, 1]. She must buy a minimum of 10 candies.
*/

function candies(arr) {
  let candies = new Array(arr.length).fill(1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      candies[i + 1] = candies[i] + 1;
    }
  }

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] < arr[i - 1]) {
      candies[i - 1] = Math.max(candies[i - 1], candies[i] + 1);
    }
  }

  let sum = candies.reduce(function (a, b) {
    return a + b;
  }, 0);

  return sum;
}

console.log(candies([1, 2, 2])); // Should return 4
console.log(candies([2, 4, 2, 6, 1, 7, 8, 9, 2, 1])); // Should return 19
console.log(candies([2, 4, 3, 5, 2, 6, 4, 5])); // Should return 12
