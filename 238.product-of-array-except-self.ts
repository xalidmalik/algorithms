/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;
  const result: number[] = [];

  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}
// @lc code=end
