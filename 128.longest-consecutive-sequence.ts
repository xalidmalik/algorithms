/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  const numberSet = new Set(nums);
  let longest = 0;

  for (let n = 0; n < nums.length; n++) {
    if (!numberSet.has(nums[n] - 1)) {
      let length = 0;
      while (numberSet.has(nums[n] + length)) {
        length += 1;
      }
      longest = Math.max(length, longest);
    }
  }

  return longest;
}
// @lc code=end
