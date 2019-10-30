/*Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9

The left-to-right diagonal = 1+5+9=15. The right to left diagonal = 3+5+9=17. Their absolute difference is |15-17| = 2.
*/

function diagonalDifference(arr) {
  // let diag1 = arr[0][0] + arr[1][1] + arr[2][2];
  // let diag2 = arr[0][2] + arr[1][1] + arr[2][0];
  // return Math.abs(diag1 - diag2);
  let l = arr.length;
  let diag1 = 0;
  let diag2 = 0;
  for (let i = 0; i < l; i++) {
    let j = l - i - 1;
    diag1 += arr[i][i];
    diag2 += arr[i][j];
  }
  return Math.abs(diag1 - diag2);
}
