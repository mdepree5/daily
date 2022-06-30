// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               Thu June 30, 2022
// todo ——————————————————————————————————————————————————————————————————————————————————

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



