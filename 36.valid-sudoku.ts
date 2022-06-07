/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  const sudokuSet = new Set();
  const length = board.length;

  for (let rIndex = 0; rIndex < length; rIndex++) {
    for (let cIndex = 0; cIndex < length; cIndex++) {
      let current = board[rIndex][cIndex];
      if (current === ".") continue;

      let sIndex = 3 * Math.floor(rIndex / 3) + Math.floor(cIndex / 3);

      const row = `r${rIndex}-${current}`;
      const col = `c${cIndex}-${current}`;
      const square = `s${sIndex}-${current}`;

      if (sudokuSet.has(row) || sudokuSet.has(col) || sudokuSet.has(square)) {
        return false;
      }
      sudokuSet.add(row);
      sudokuSet.add(col);
      sudokuSet.add(square);
    }
  }

  return true;
}
// @lc code=end
