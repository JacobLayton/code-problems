function rotLeft(a, d) {
  let rotatationsRemaining = d;
  let shiftedArray = a;

  while (rotatationsRemaining > 0) {
    let shiftedElement = shiftedArray.shift();
    shiftedArray.push(shiftedElement);
    rotatationsRemaining--;
  }

  return shiftedArray;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4)); // should return [5,1,2,3,4]
console.log(
  rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13)
);
// should return [87 97 33 47 70 37 8 53 13 93 71 72 51 100 60]
