/**
 * 二维网格中有无单词 同一格不能重复使用

示例:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true.
给定 word = "SEE", 返回 true.
给定 word = "ABCB", 返回 false

 */


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

  function back_track([i, j], idx) {
    if (idx >= word.length)
      return true

    if (i < 0 || j < 0 || i >= row || j >= col) return false
    const tmp = board[i][j]
    if (tmp !== word[idx]) return false
    board[i][j] = true
    if (back_track([i + 1, j], idx + 1)) return true
    if (back_track([i, j + 1], idx + 1)) return true
    if (back_track([i, j - 1], idx + 1)) return true
    if (back_track([i - 1, j], idx + 1)) return true
    board[i][j] = tmp
    return false
  }
  const row = board.length
  const col = board[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0]) {
        if (back_track([i, j], 0))
          return true
      }
    }
  }
  return false
};