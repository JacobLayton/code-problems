function simpleArraySum(ar) {
  let sum = 0;
  // for (var i = 0; i < ar.length; i++) {
  //     sum += ar[i];
  // }
  for (var i in ar) {
    sum += ar[i];
  }
  return sum;
}

let sample = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(sample));
// Output should be 31
