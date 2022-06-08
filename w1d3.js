// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                               Tue June 08, 2022
// todo ——————————————————————————————————————————————————————————————————————————————————
// => iterate through first array, construct a hash. 
//! => different method: sort arrays first. enables you to handle different size arrays faster.
const intersect = (arr1, arr2) => {
  let hash = {};
  let result = [];

  for (let i of arr1) {
    if (!hash[i]) hash[i] = 1;
    else hash[i]++
  }
  
  for (let i of arr2) {
    if (hash[i] > 0) result.push(i)
    hash[i]--
  }
  return result;
}
const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];
console.log(intersect(arr1, arr2)); // => [2,2]
// => initialize "buy price" and replace if smaller (as iterate through prices). replace profit when prices[i+1] > buyPrice is greater than current max profit
const bestTimeToBuyAndSell = prices => {
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    let currProfit = prices[i + 1] - prices[i];

    if(currProfit > 0){
      if(prices[i] < buyPrice) buyPrice = prices[i];
      if(prices[i + 1] - buyPrice > profit) profit = prices[i + 1] - buyPrice;
    }
  }
  return profit;
}
