// Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.

function makeAnagram(a, b) {
  let deletions = 0;
  let letterFreqs = {};

  for (let char of a) {
    if (letterFreqs[char]) {
      letterFreqs[char] += 1;
    } else {
      letterFreqs[char] = 1;
    }
  }

  for (let char of b) {
    if (letterFreqs[char]) {
      letterFreqs[char] -= 1;
    } else {
      letterFreqs[char] = -1;
    }
  }

  for (let freq in letterFreqs) {
    deletions += Math.abs(letterFreqs[freq]);
  }
  return deletions;
}

console.log(makeAnagram("cde", "abc")); // should return 4
console.log(
  makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
); // should return 30
console.log(makeAnagram("showman", "woman")); // should return 2
