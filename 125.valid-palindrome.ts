/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const isAlphanumeric = (letter: string) => {
    const numbersTuple = [48, 57];
    const letterTupple = [65, 90, 97, 122];
    let current = letter.charCodeAt(0);
    if (
      (current >= numbersTuple[0] && current <= numbersTuple[1]) ||
      (current >= letterTupple[0] && current <= letterTupple[1]) ||
      (current >= letterTupple[2] && current <= letterTupple[3])
    ) {
      return true;
    }
    return false;
  };

  const stringArray = s.split("").filter(isAlphanumeric);
  let length = stringArray.length - 1;

  for (let l = 0; l < stringArray.length; l++) {
    let first = stringArray[l];
    let last = stringArray[length - l];

    if (typeof first !== "string" && typeof last !== "string") {
      if (first !== last) {
        return false;
      }
    } else if (first.toLowerCase() !== last.toLowerCase()) {
      return false;
    }
  }
  return true;
}
// @lc code=end
