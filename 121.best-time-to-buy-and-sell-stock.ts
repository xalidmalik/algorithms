/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    let leftValue = prices[left];
    let rightValue = prices[right];

    if (rightValue < leftValue) {
      left = right;
    } else {
      maxProfit = Math.max(maxProfit, rightValue - leftValue);
    }
    right += 1;
  }

  return maxProfit;
}
// @lc code=end
