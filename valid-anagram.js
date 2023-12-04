// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// input: two lowercase strings
// output: boolean

// check string length: not equal, return false
// create cache for both strings, key: char, val: # of instances
// iterate through one cache, check that the other cache ahs same value for key: if not return false
// return true

function validAnagram(s, t) {
  const sCache = {};
  const tCache = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (sCache[s[i]]) {
      sCache[s[i]]++;
    } else {
      sCache[s[i]] = 1;
    }
    if (tCache[t[i]]) {
      tCache[t[i]]++;
    } else {
      tCache[t[i]] = 1;
    }
  }
  for (let char in sCache) {
    if (sCache[char] !== tCache[char]) {
      return false;
    }
  }
  return true;
}

const dog = 'dog';
const cat = 'cat';
const god = 'god';
const rat = 'rat';

console.log(validAnagram(dog, god)); // -> true
console.log(validAnagram(cat, rat)); //-> false
