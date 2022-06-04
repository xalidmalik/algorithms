/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const mySet = new Set();
  let response: boolean = false;

  nums.forEach((number) => {
    if (mySet.has(number)) {
      response = true;
      return;
    }
    mySet.add(number);
  });
  return response;
}
// @lc code=end
