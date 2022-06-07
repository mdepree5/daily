// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               Mon June 07, 2022
// todo ——————————————————————————————————————————————————————————————————————————————————
const twoSum = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++){
    if (hash[nums[i]] >= 0) return [hash[nums[i]], i];
    hash[target - nums[i]] = i;
  };
};

const mergeSortedArray = (arr1, m, arr2, n) => {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while(second >= 0) {
    let fVal = arr1[first];
    let sVal = arr2[second];

    if(fVal > sVal) {
      arr1[i] = fVal;
      i--;
      first--;
    } else {
      arr1[i] = sVal;
      i--;
      second--;
    };
  };
};

/* const mergeSortedArra = (arr1, m, arr2, n) => {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while(second >= 0){
    let fVal = arr1[first];
    let sVal = arr2[second];

    if(fVal > sVal) {
      arr1[i] = fVal;
      i--;
      first--;
    } else {
      arr1[i] = sVal;
      i--;
      second--;
    };
  };
}; */

const sortedSquares = nums => nums.map(x => x*x).sort((a, b) => a - b);

// const rotate2 = (nums, k) => nums.splice(k + 1, nums.length).concat(nums.splice(0, k + 1));

const revNums = (nums, start, end) => {
  while(start < end){
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
const rotate = (nums, k) => {
  k = k % nums.length;

  nums.reverse();
  revNums(nums, 0, k - 1);
  revNums(nums, k, nums.length - 1);
};
// const nums = [1,2,3,4,5,6,7];
// const k = 3;
// console.log(rotate(nums, k));


