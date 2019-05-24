/**
给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。
一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。
你可以假设网格的四个边均被水包围。

示例 1:

输入:
11110
11010
11000
00000

输出: 1


示例 2:

输入:
11000
11000
00100
00011

输出: 3
 */

/**
 如果是岛则+1 然后沉没其所连接的所有岛（递归）
 */
/**
* @param {character[][]} grid
* @return {number}
*/
var numIslands = function (grid) {
  var re = 0
  var glen = grid.length
  if (grid.length === 0) return 0
  var len = grid[0].length

  function down(i, j) {
    if (i >= 0 && i < glen && j >= 0 && j < len && grid[i][j] === '1') {
      grid[i][j] = '0'
      down(i - 1, j)
      down(i + 1, j)
      down(i, j - 1)
      down(i, j + 1)
    }
  }
  for (let i = 0; i < glen; i++) {
    for (let j = 0; j < len; j++) {
      var val = grid[i][j]
      if (val === '1') {
        re += 1
        down(i, j)
      }
    }
  }

  return re
};