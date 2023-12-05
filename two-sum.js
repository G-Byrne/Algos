// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(arr, target) {
  // store key values
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    if (Object.hasOwn(cache, arr[i])) {
      return [cache[arr[i]], i];
    } else {
      cache[target - arr[i]] = i;
    }
  }
}

const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9)); //-> [0,1]
console.log(twoSum([3, 2, 4], 6)); //-> [1,2]
