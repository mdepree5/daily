// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               Thu June 30, 2022
// todo ——————————————————————————————————————————————————————————————————————————————————
const mergeLListRecall = (l1, l2) => {
  let dummy = new Node(0);
  let tail = dummy;
  let curr1 = l1;
  let curr2 = l2;

  while (curr1 !== null && curr2 !== null) {
    if (curr1.val < curr2.val) { // => choose lower value of l1 or l2 for in-order sorting
      tail.next = curr1; // => populate dummy with the value from one of the linked-lists
      curr1 = curr1.next; // => iterate to next value in the same linked-list
    } else {
      tail.next = curr2;
      curr2 = curr2.next;
    };
    tail = tail.next; // => reassign the current tail pointer to be able to assign the next tail.next value
  };

  if (curr1 !== null) tail.next = curr1; // => if only one of the lists remains, attach the rest of it to the end
  if (curr2 !== null) tail.next = curr2;
  
  return dummy.next; // => return our dummy.next
};

const reverseLL = (head, prev = null) => {
  if (head === null) return prev; // => base case: returning the 'reassigned head' which is recursively updated to be the last element in the reversed list
  const next = head.next; // => if we do not save the next variable, we can't make our recurisve call to traverse the linked-list
  head.next = prev; // => we are reassigning to point backward to the 'previous' node. we pass in the current 'head' to our recursive call
  return reverseLL(next, head); // => call next as our next head (for traversal) and head as our next prev, which will be used as the "prev" reassignment
};

const removeNthFromEndLL = (head, n) => {
  let dummy = new Node(0);
  dummy.next = head;
  let pointer1 = dummy;
  let pointer2 = dummy;

  for (let i = 0; i < n; i++) pointer1 = pointer1.next; // => traverse til pointer1 is n distance away from pointer2

  while (pointer1 !== null) {
    pointer1 = pointer1.next; // => ll traversal with both pointers til pointer1 reaches end of ll
    pointer2 = pointer2.next; // => upon end of traversal pointer2 should be 'n' distance away from end
  };
  pointer2.next = pointer2.next.next; // => reassign pointer2 to next.next, effectively removing the 'next'/target node
  return dummy.next; // => return the modified ll which we created dummy reference for
};

const deleteNodeWithoutHead = node => {
  node.val = node.next.val; // => reassign val to next's val
  node.next = node.next.next; // => reassign next to next's next
};

const leafListIterative = root => {
  if (root === null) return [];
  const leaves = [];
  const stack = [root];
  while(stack.length) {
    const current = stack.pop();
    if (current.left === null && current.right === null) leaves.push(current.val)
    
    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
  };
  return leaves;
};

const leafListRecursive = root => {
  const leaves = [];
  fill(root, leaves);
  return leaves;
};

const fill = (root, leaves) => {
  if (root === null) return;
  if (root.left === null && root.right === null) leaves.push(root.val);
  fill(root.left, leaves);
  fill(root.right, leaves);
};

/* 
the reality is time is on my side. 
if I do not successfully navigate the big technical interviews
ahead of me this year, I can try again in the future
with more time, practice, concentrated effort, experience
*/

const mergeListDummy = (l1, l2) => {
  let dummy = new Node(null);
  let tail = dummy;
  let curr1 = l1;
  let curr2 = l2;

  while (curr1 !== null && curr2 !== null) {
    if (curr1.val < curr2.val) {
      tail.next = curr1; // => assigning next to either curr1 or curr2 based off value (sorting)
      curr1 = curr1.next; // => then iterating through the linked-list curr1 or curr2 (for next comparison)
    } else {
      tail.next = curr2;
      curr2 = curr2.next;
    }
    tail = tail.next; // => iterating through the sorted/merged list we are building
  };
  
  if (curr1 !== null) tail.next = curr1;
  if (curr2 !== null) tail.next = curr2;
  
  return dummy.next;
};
/* 
iterating through linked-lists necessitates reassigning current/next pointers
*/

// => recursive solution
const mergeLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  if (head1.val < head2.val) {
    const next1 = head1.next;
    head1.next = mergeLists(next1, head2);
    return head1;
  } else {
    const next2 = head2.next;
    head2.next = mergeLists(head1, next2);
    return head2;
  };
};


const fibonacci = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  return fibonacci(n-1) + fibonacci(n - 2);
};

const reverseLinkedList = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseLinkedList(next, head);
};

const reverseString = array => array.reverse; // => ['h', 'e', 'y'] -> ['y', 'e', 'h']
// **** ——————————————————————————————————————————————————————————————————————————————————
// ****                               binary trees
// **** ——————————————————————————————————————————————————————————————————————————————————
const binaryTreeHeight = root => root === null ? -1 : 1 + Math.max(binaryTreeHeight(root.left), binaryTreeHeight(root.right));
const binaryTreeHeightExplained = root => {
  if (root === null) return 'problem-specific-empty-tree-edge-case-handling-which-could-be-"-1"-or-"0"';
  return 1 + Math.max(binaryTreeHeightExplained(root.left), binaryTreeHeightExplained(root.right));
};



/* 
        a
      /  \
    b     c
  /  \     \
d     e     f

depth first recursive: identify end nodes and identify target node if found
*/

const recursivePathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const left = pathFinder(root.left, target);
  if (left !== null) return [root.val, ...left];
  
  const right = pathFinder(root.right, target);
  if (right !== null) return [root.val, ...right];

  return null;
};

const pushPathFinder = (root, target) => {
  const result = pathHelper(root, target);
  return (result === null) ? null : result.reverse;
};

const pathHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const left = pathHelper(root.left, target);
  if (left !== null) {
    left.push(root.val)
    return left;
  };

  const right = pathHelper(root.right, target);
  if (right !== null) {
    right.push(root.val)
    return right;
  };

  return null;
};

/* 
  Mock
*/
let names = ['scott', ['sebastian', ['alan', ['melanie', ['yourname']]]]];

const flattener = names => names.flat(Infinity);
const capitalHandler = name => {
  name += '';
  return name.charAt(0).toUpperCase() + name.substr(1);
};

const capitalizer = names => {
  const uncapitalized = flattener(names);
  const capitalized = [];
  
  for (let name of uncapitalized) capitalized.push(capitalHandler(name));

  return capitalized;
};

console.log(capitalizer(names)); // => [ 'Scott', 'Sebastian', 'Alan', 'Melanie', 'Yourname' ]

// **** ——————————————————————————————————————————————————————————————————————————————————
// ****                               binary trees
// **** ——————————————————————————————————————————————————————————————————————————————————
const maxPathSum = root => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  return root.val + maxChild;
};

class Node {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  };
};

const depthFirst = root => {
  if (root === null) return {};
  const left = depthFirst(root.left);
  const right = depthFirst(root.right);
  return [root.val, ...left, ...right];
};

const depthFirstIterative = root => {
  if (root === null) return [];
  const values = [];
  const stack = [root];

  while (stack.length > 0){
    const current = stack.pop();
    values.push(current.val);

    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  };
  return values;
};

const breadthFirstIterative = root => {
  if (root === null) return [];
  const values = [];
  const queue = [root];

  while (queue.length > 0){
    const current = queue.shift();
    values.push(current.val);

    if(current.right) queue.push(current.right);
    if(current.left) queue.push(current.left);
  };
  return values;
};



