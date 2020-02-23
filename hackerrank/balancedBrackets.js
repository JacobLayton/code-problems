//www.hackerrank.com/challenges/balanced-brackets/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues

// Complete the function isBalanced in the editor below. It must return a string: YES if the sequence is balanced or NO if it is not.

https: function isBalanced(s) {
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  let result = "YES";
  s.split("").forEach((item) => {
    if (bracketMap[item]) {
      stack.push(bracketMap[item]);
    } else if (stack.pop() !== item) {
      result = "NO";
    }
  });
  if (stack.length) result = "NO";
  return result;
}

console.log(isBalanced("{[()]}")); // Yes
console.log(isBalanced("{{[[(())]]}}")); // Yes
console.log(isBalanced("{[(])}")); // No
console.log(isBalanced("{(([])[])[]}")); // Yes
console.log(isBalanced("{(([])[])[]]}")); // No
