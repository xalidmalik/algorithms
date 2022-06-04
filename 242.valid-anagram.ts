/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const firstString = s.split("").sort().join("");
  const secondString = t.split("").sort().join("");

  return firstString === secondString;
}
// @lc code=end
