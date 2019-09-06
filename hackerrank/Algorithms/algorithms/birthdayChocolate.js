function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i < s.length - m + 1; i++) {
    var sum = 0;
    for (var j = 0; j < m; j++) {
      sum += s[i + j];
    }
    if (sum == d) {
      count++;
    }
  }
  return count;
}

let arr = [1, 2, 1, 3, 2];
let day = 3;
let month = 2;

console.log(birthday(arr, day, month));
