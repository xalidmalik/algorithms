/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const collection = {};
  const response = [];

  nums.forEach((number) => {
    if (!collection[number]) collection[number] = 1;
    else collection[number]++;
  });

  const asArray: [string, number][] = Object.entries(collection);
  asArray.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    response.push(Number(asArray[i][0]));
  }

  return response;
}
// @lc code=end
