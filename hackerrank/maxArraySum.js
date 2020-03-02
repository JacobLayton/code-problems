// https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming

// Complete the  function in the editor below. It should return an integer representing the maximum subset sum for the given array.


function maxSubsetSum(arr) {
    let incl = 0;
    let excl = 0;

    for (let i = 0; i < arr.length; i++) {
        
        let newExcl = Math.max(incl, excl);

        incl = excl + arr[i];
        excl = newExcl;
    }

    return Math.max(incl, excl);

}

console.log(maxSubsetSum([ 3, 7, 4, 6, 5 ])); // Should return 13
console.log(maxSubsetSum([ 2, 1, 5, 8, 4 ])); // Should Return 11
console.log(maxSubsetSum([ 3, 5, -7, 8, 10 ])); // Should return 15