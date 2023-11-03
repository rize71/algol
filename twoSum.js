/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1
//  bruteforce
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// 2
var twoSum2 = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map[diff] != null) return [map[diff], i];
    map[(nums[i] = i)];
  }
};
