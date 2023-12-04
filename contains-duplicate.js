// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct

// input array of integers
// output is boolean

// iterate through the array, counting how many times a number appears, check if any number appear more than once, if so return true, else return false

function containsDup(arr) {
  const nums = new Set();
  for (let num of arr) {
    if (nums.has(num)) {
      return true;
    } else {
      nums.add(num);
    }
  }
  return false;
}

const nums1 = [1, 2, 3, 4, 5, 65, 7];
const nums2 = [1, 2, 3, 4, 5, 2, 8];

console.log(containsDup(nums1)); // -> false
console.log(containsDup(nums2)); // -> true
