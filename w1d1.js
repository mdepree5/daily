// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               Mon June 06, 2022
// todo ——————————————————————————————————————————————————————————————————————————————————
const twoSum = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++){
    if (hash[nums[i]] >= 0) return [hash[nums[i]], i];
    hash[target - nums[i]] = i;
  };
};
// const nums1 = [2, 7, 11, 15];
// const target1 = 9;
// console.log(twoSum(nums1, target1)); // => [0, 1];

const medianOfSortedArrays = (arr1, arr2) => {
  const sorted = arr1.concat(arr2).sort((a, b) => a - b);
  let mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? ((sorted[mid] + sorted[mid - 1]) / 2).toFixed(5)
  : sorted[mid].toFixed(5);
};
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// console.log(medianOfSortedArrays(arr1, arr2)); // => 2.50000

const containsDuplicate = nums => {
  const set = new Set();
  for (let i = 0; i < nums.length; i++){ 
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  };
  return false;
};
// const nums1 = [1, 2, 3, 1];
// console.log(containsDuplicate(nums1)) // => true

const maxSubArray = nums => {
  let curr = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++){
    if (curr < 0) curr = 0;
    curr += nums[i];
    if (curr > max) max = curr;
  };
  return max;
};
// const nums1 = [-2,1,-3,4,-1,2,1,-5,4]
// console.log(maxSubArray(nums1)) // => 6

