/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const valueWithIndex = new Map();
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    let value = target - nums[i];
    let hashedValue = valueWithIndex.get(value);

    if (hashedValue !== undefined) return [hashedValue, i];
    else if (value - nums[i + 1] === 0) return [i, i + 1];
    else valueWithIndex.set(nums[i], i);
  }
}
// @lc code=end
