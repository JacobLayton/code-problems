// https://www.hackerrank.com/challenges/ctci-big-o/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=miscellaneous

// Complete the primality function in the editor below. It should return Prime if  is prime, or Not prime.

function primality(n) {
  if (n < 2) {
    return "Not prime";
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return "Not prime";
    } else {
      continue;
    }
  }
  return "Prime";
}

console.log(primality(12)); // Not prime
console.log(primality(5)); // Prime
console.log(primality(7)); // Prime
