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

// => two pointers. increment j pointer from number to char, as well as to slice a number. iterate 0-number times pushing the char at j.
const uncompress = string => {
  let result = [];
  const numbers = '1234567890';
  let i = 0;
  let j = 0;
  while (j < string.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(string.slice(i, j));
      for (let count = 0; count < num; count += 1) {
        result.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  return result.join('');
}
// => two pointers. increment j pointer til new char. push number-char pair (or char if count is 1). return join.
const compress = string => {
  let result = [];
  let i = 0;
  let j = 0;

  while (j <= string.length) {
    if (string[i] === string[j]) {
      j += 1;
    } else {
      const num = j - i;
      if (num === 1) result.push(string[i]);
      else result.push(String(num), string[i]);
      i = j;
    };
  };
  return result.join('');
}

// => three iterations. add s1 chars to hash. subtract s2 chars from hash, jump out if new char. if hash count is not 0, jump (uneven number of a char). return true if hash is 0.
const anagrams = (string1, string2) => {
  const hash = {};
  for (let char of string1) {
    if (!(char in hash)) hash[char] = 0;
    hash[char] += 1;
  };

  for (let char of string2) {
    if (char in hash) hash[char] -= 1;
    else return false;
  };

  for (let char in hash) {
    if (hash[char] !== 0) return false;
  }
  return true;
}

// => two iterations. first to create count object. second to replace best
const mostFrequentCHar = s => {
  const count = {};

  for (let char of s) {
    if (!(char in count)) count[char] = 0;
    count[char] += 1;
  }

  let best = null;
  for (let char of s) {
    if (best === null || count[char] > count[best]) best = char;
  }
  return best;
}
// => store value:index pairs in previousNums object. comparison check for complement (target - array value). if so, return the index pairs.
const pairSum = (numbers, target) => {
  const previousNums = {};
  for (let i = 0; i < numbers.length; i += 1){
    const num = numbers[i];
    const complement = target - num;
    if (complement in previousNums) return [previousNums[complement], i];
    
    previousNums[num] = i;
  }
}
// => same logic as pairsum but complement = target / num, rather than = target - num
const pairProduct = (numbers, target) => {
  const previousNums = {};
  for (let i = 0; i < numbers.length; i += 1){
    const num = numbers[i];
    const complement = target / num;
    if (complement in previousNums) return [previousNums[complement], i];
    
    previousNums[num] = i;
  }
}
  // => leverage a set instantiated with set "A" and do set.has comparison to push containing items into new array
const intersection = (a, b) => {
  const result = [];
  const set = newSet(a);
  for (let item of b) {
    if (set.has(item)) result.push(item)
  }
  return result;
}
// => pointers on either end. j decrements if j points to 5. in-place shifting of values if i points to 5. i increments if not pointing to 5.
const fiveSort = nums => {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if(nums[j] === 5) {
      j -= 1;
    } else if (nums[i] === 5) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 1;
    } else {
      i+= 1;
    }
  }
  return nums;
}
