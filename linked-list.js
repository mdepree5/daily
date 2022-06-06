// => 

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               ll-values
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> iterative
const llValIt = head => {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
}
//? Time: O(n)
//? Space: O(n)
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> recursive
const llValRec = head => {
  const values = [];
  _llVal(head, values);
  return values;
}

const _llVal = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  _llVal(head.next, values);
}
//? Time: O(n)
//? Space: O(n)
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               sumList
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> iterative
const sumIt = head => {
  let sum = 0;
  let current = head;
  while (current !== null){
    sum += current.val;
    current = current.next;
  }
  return sum;
}
//? Time: O(n)
//? Space: O(1)
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> recursive
const sumRec = head => {
  if (head === null) return 0;
  return head.val + sumRec(head.next);
}
//? Time: O(n)
//? Space: O(n)
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               ll-find
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> iterative
const findIt = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
}
//? Time: O(n)
//? Space: O(1)
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> recursive
const findRec = (head, target) => {
  if(head === null) return false;
  if(head.val === target) return true;
  return findRec(head.next, target);
}
//? Time: O(n)
//? Space: O(n)
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               Get node value
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> iterative
const getNVit = (head, index) => {
  let count = 0;
  let current = head;
  while (current !== null){
    if (count === index) return current.val;
    current = current.next;
    count += 1;
  }
  return null;
}
//? Time: O(n)
//? Space: O(1)
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> recursive
const getNVrec = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return getNVrec(head.next, index - 1);
}
//? Time: O(n)
//? Space: O(n) 
// => recursive sln we'll need to go backward and decrement
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               Reverse list
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> iterative
const revit = head => {
  let current = head;
  let prev = null;
  while (current !== null){
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
//? Time: O(n)
//? Space: O(1)
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> recursive
const revrec = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return revrec(next, head)
}
//? Time: O(n)
//? Space: O(n)
// !!!! ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               ZipperLists
// todo ——————————————————————————————————————————————————————————————————————————————————
// !!!! ——————————————————————————————————————————————————————————————————————————————————
//=> iterative
const zipIt = (h1, h2) => {
  const head = h1;
  let tail = head;
  let curr1 = h1.next;
  let curr2 = h2;
  let count = 0;

  while (curr1 !== null && curr2 !== null){
    if (count % 2 === 0){
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      tail.next = curr1;
      curr1 = curr1.next;
    }
    tail = tail.next;
    count += 1;
  }

  if(curr1 !== null) tail.next = curr1;
  if(curr2 !== null) tail.next = curr2;

  return head;
}
//? Time: O(min(n, m))
//? Space: O(1)
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> recursive
const zipRec = (h1, h2) => {
  if (h1 === null && h2 === null) return null;
  if (h1 === null) return h2;
  if (h2 === null) return h1;
  const next1 = h1.next;
  const next2 = h2.next;
  h1.next = h2
  h2.next = zipRec(next1, next2)
  return h1;
}
//? Time: O(min(n, m))
//? Space: O(min(n, m))
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               mergelists
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> iterative
const mergeIt = (head1, head2) => {
  let dummy = new Node(null);
  let tail = dummy;
  let curr1 = head1;
  let curr2 = head2;

  while (curr1 !== null && curr2 !== null){
    if(curr1.val < curr2.val){
      tail.next = curr1;
      curr1 = curr1.next;
    } else{
      tail.next = curr2;
      curr2 = curr2.next;
    }
    tail = tail.next;
  }

  if (curr1 !== null) tail.next = curr1;
  if (curr2 !== null) tail.next = curr2;
  
  return dummy.next;
}
//? Time: O(min(n, m))
//? Space: O(1)
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> recursive
const mergeRec = (head1, head2) => {
  if(head1 === null && head2 === null) return null;
  if(head1 === null) return head2;
  if(head2 === null) return head1;

  if(head1.val < head2.val){
    const next1 = head1.next;
    head1.next = mergeRec(next1, head2);
    return head1;
  } else {
    const next2 = head2.next;
    head2.next = mergeRec(head1, next2);
    return head2;
  }
}
//? Time: O(min(n, m))
//? Space: O(min(n, m))
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               Univalue List
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> iterative
const unIt = head => {
  let curr = head;
  while(curr !== null){
    if (curr.val !== head.val) return false;
    curr = curr.next;
  }
  return true;
}
//? Time: O(n)
//? Space: O(1)
// todo ——————————————————————————————————————————————————————————————————————————————————
//=> recursive
const unRec = (head, prevVal=null) => {
  if (head === null) return true;
  if (prevVal === null || prevVal === head.val){
    return unRec(head.next, head.val)
  } else {
    return false
  }
}
//? Time: O(n)
//? Space: O(n)

