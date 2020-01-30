function minimumSwaps(arr) {
  let swaps = 0;
  let visited = [];
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let cycle = 0;
    while (!visited[j]) {
      visited[j] = true;
      j = arr[j] - 1;
      cycle++;
    }
    if (cycle != 0) swaps += cycle - 1;
  }
  return swaps;
  // let swaps = 0;
  // // for loop starting at index 0, through entire array
  // for (let i = 0; i < arr.length - 1; i++) {
  //     // while element at i is not at the correct index
  //     while ( i+1 !== arr[i]) {
  //         // create temp index where current element should go
  //         let temp = arr[arr[i] - 1];
  //         // swap current element with element at temp index
  //         arr[arr[i] - 1] = arr[i]
  //         arr[i] = temp;
  //         // increment swaps counter
  //         swaps += 1;
  //         console.log(arr);
  //     }
  // }
  // return swaps;
}

console.log(minimumSwaps([4, 3, 1, 2])); // should return 3
console.log(minimumSwaps([2, 3, 4, 1, 5])); // should return 3
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7])); // should return 3
