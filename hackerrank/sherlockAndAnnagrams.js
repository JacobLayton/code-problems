function sherlockAndAnagrams(s) {
  const duplicatesCount = s.split("").filter((v, i) => s.indexOf(v) !== i)
    .length;

  if (!duplicatesCount) return 0;
  let anagramsCount = 0;

  const arr = getAllSubstrings(s);

  for (let i = 0; i < arr.length; i++) {
    anagramsCount += countAnagrams(i, arr);
  }

  return anagramsCount;
}

function getAllSubstrings(str) {
  let i,
    j,
    result = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

function isAnagram(str1, str2) {
  const hist = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (hist[char]) {
      hist[char]++;
    } else {
      hist[char] = 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    const char = str2[j];
    if (hist[char]) {
      hist[char]--;
    } else {
      return false;
    }
  }

  return true;
}

function countAnagrams(currentIndex, arr) {
  const currentElement = arr[currentIndex];
  const arrRest = arr.slice(currentIndex + 1);
  let counter = 0;

  for (let i = 0; i < arrRest.length; i++) {
    if (
      currentElement.length === arrRest[i].length &&
      isAnagram(currentElement, arrRest[i])
    ) {
      counter++;
    }
  }

  return counter;
}

console.log(sherlockAndAnagrams("abba")); // should return 4
console.log(sherlockAndAnagrams("abcd")); // should return 0
console.log(sherlockAndAnagrams("ifailuhkqq")); // should return 3
console.log(sherlockAndAnagrams("kkkk")); // should return 10
