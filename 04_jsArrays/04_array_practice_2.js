/* 
            Array Q2
     -----------------------
For a given array with prices of 5 items: [250,645,300,900,50]
All items have an offer of 10% OFF on them.
Change the array to store final price after applying offer.
*/

let prices = [250, 645, 300, 900, 50];
console.log("Initial prices:", prices);

for (let i = 0; i < prices.length; i++) {
  let discount = prices[i] * 0.1;
  prices[i] -= discount;
}
console.log("10% OFF prices:", prices);
