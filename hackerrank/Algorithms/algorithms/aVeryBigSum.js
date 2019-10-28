// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(ar) {
  let sum = 0;
  for (var i in ar) {
    sum += ar[i];
  }
  return sum;
}
