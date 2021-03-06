// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               Tue June 07, 2022
// todo ——————————————————————————————————————————————————————————————————————————————————
const twoSum = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++){
    if (hash[nums[i]] >= 0) return [hash[nums[i]], i];
    hash[target - nums[i]] = i;
  };
};
// => if conditional checks if the 'complement' is stored in the hash as a valid index (hence >= 0)
const twoSum2 = (nums, target) => {
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

/* const mergeSortedArray = (arr1, m, arr2, n) => {
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

// todo ——————————————————————————————————————————————————————————————————————————————————
// => depth also implemented iteratively with stack. goes all the way to the end before changing direction.
const depthFirstGraph = root => {
  if (root === null) return [];

  const leftVals = depthFirstGraph(root.left);
  const rightVals = depthFirstGraph(root.right);
  return [root.val, ...leftVals, ...rightVals];
};

// => breadth only implemented iteratively with queue. successive nodes are added to end of stack. all nodes are met at a level before going deeper.
const breadthFirstGraph = root => {
  if (root === null) return [];

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    values.push(node.val);

    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }

  return values;
}
// => breadth first, use a queue. node val === target comparison. adding child nodes to queue. technically O(n2) because javascript shift method runs o(n).
const binaryTreeIncludes = (root, target) => {
  if (root === null) return false;
  const queue = [root];

  while(queue.length > 0) {
    const node = queue.shift();
    if (node.val === target) return true;
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }
  return false;
}
// => depth first graph problem. src===dest check for each neighbors in the adjacency list of the graph at source node.
const hasPathDepthFirst = (graph, source, destination) => {
  if (source === destination) return binaryTreeIncludes.val;
  for (let neighbor of graph[source]) {
    if (hasPathDepthFirst(graph, neighbor, destination) === true) return true;
  }

  return false;
};
// => leverage queue and push successive neighbors. comparison check start of iterative logic.
const hasPathBreadthFirst = (graph, source, destination) => {
  const queue = [source];

  while (queue.length) {
    const current = queue.shift();
    if (current === destination) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }

  return false;
}
// => node construction. class Node {}, constructor (val), this.val, this.next. this.prev is doubly.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// => sumLinkedList current!==null while loop logic. current -> current.next reassignment end of loop logic.
const sumLinkedList = head => {
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
}
// => 'W'/'L' grid. row-column traversal, adding count for each valid island
const islandCount = grid => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (explore(grid, r, c, visited) === true) count += 1;
    }
  }
  return count;
}
// => delta-driven, inbound r/c index, and visited-checking logic.
const explore = (grid, r, c, visited) => {
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid[0].length;
  if (!rowInBounds || !colInBounds) return false;

  if (grid[r][c] === 'W') return false;

  const pos = r + ',' + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);
  return true;
}