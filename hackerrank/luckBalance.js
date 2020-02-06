//www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

https: function luckBalance(k, contests) {
  let luck = 0;
  let importantLuck = [];

  // add unimportant contests to luck, important contests to new array
  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 0) {
      luck += contests[i][0];
    } else {
      importantLuck.push(contests[i][0]);
    }
  }

  // sort descending
  importantLuck.sort(function (a, b) {
    return b - a;
  });

  let impLLen = importantLuck.length;

  // remove must-win contests and subtract from luck
  for (let i = k; i < impLLen; i++) {
    let poppedLuck = importantLuck.pop();
    luck -= poppedLuck;
  }

  // add lost contests to luck
  for (let impLuck of importantLuck) {
    luck += impLuck;
  }

  return luck;
}

console.log(
  luckBalance(3, [
    [5, 1],
    [2, 1],
    [1, 1],
    [8, 1],
    [10, 0],
    [5, 0],
  ])
); // should return 29

console.log(
  luckBalance(2, [
    [5, 1],
    [4, 0],
    [6, 1],
    [2, 1],
    [8, 0],
  ])
); //  should return 21
