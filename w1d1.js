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

const linkedListAddTwoNumbers = (l1, l2) => {
  let sum = 0;
  let current = new ListNode(0);
  let result = current;
  
  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    
    current.next = new ListNode(sum % 10);
    current = current.next;
    sum = sum > 9 ? 1 : 0;
  }
  
  if (sum) current.next = new ListNode(sum);
  return result.next;
};
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807


const search = (nums, target) => {
  let first = 0;
  let last = nums.length - 1;
  while (first <= last) {
    let mid = Math.floor(((first + last) / 2));
    if (nums[mid] < target) first = mid + 1;
    else if (nums[mid] > target) last = mid - 1;
    else return mid;
  }
  return -1;
};
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

const badVersion = n => {
  let left = 1;
  let right = n;

  while(left < right){
    let mid = left + Math.floor((right - left) / 2);
    if (isBadVersion(mid)) right = mid;
    else left = mid + 1;
  }
  return left;
}

const searchInsertPosition = (nums, target) => {
  let left = 0;
  let right = nums.length;

  while (left < right){
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
}