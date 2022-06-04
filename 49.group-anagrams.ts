/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const stringGroups = {};
  const length = strs.length;

  for (let i = 0; i < length; i++) {
    let sortedGroup = strs[i].split("").sort().join("");

    if (!stringGroups[sortedGroup]) stringGroups[sortedGroup] = [strs[i]];
    else stringGroups[sortedGroup].push(strs[i]);
  }

  return Object.values(stringGroups);
}
// @lc code=end
