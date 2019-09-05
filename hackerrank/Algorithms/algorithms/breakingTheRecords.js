function breakingRecords(scores) {
  var hi = scores[0];
  var lo = scores[0];
  var hiCount = 0;
  var loCount = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > hi) {
      hi = scores[i];
      hiCount++;
    }
    if (scores[i] < lo) {
      lo = scores[i];
      loCount++;
    }
  }
  return [hiCount, loCount];
}

const season1 = [10, 5, 20, 20, 4, 5, 2, 25, 1];

console.log(breakingRecords(season1));
