
/**
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。

示例:
现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

给定 target = 5，返回 true。
给定 target = 20，返回 false。

 */

/**
 *  第一种笨比方法是自己写的 递归本 i,j 的行列
 * 
 *  第二种 
 *  看左下和右上那两个元素
 * 
 * 左下开始：比target大就 上↑ ; 小就 右→
 * 右上同理
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  //     const row=matrix.length
  //     if(row===0)return false
  //     const col=matrix[0].length

  //     function down(i,j){
  //         if(i>=row)return
  //         if(matrix[i][j]===target)return true
  //         if(down(i+1,j))return true
  //     }
  //     function right(i,j){
  //         if(j>=col)return
  //         if(matrix[i][j]===target)return true
  //         if(right(i,j+1))return true
  //     }

  //     function go(i,j){
  //         if(i>=row || j>=col)return
  //         if(matrix[i][j]>target)return 
  //         else if(matrix[i][j]===target)return true
  //         if(right(i,j+1))return true
  //         if(down(i+1,j))return true
  //         if(go(i+1,j+1))return true
  //     }
  //     if(go(0,0))return true
  //     return false

  let col = 0
  let row = matrix.length - 1
  if (row < 0) return false
  const colLen = matrix[0].length
  while (col < colLen && row >= 0) {
    let tmp = matrix[row][col]
    if (tmp === target) return true
    else if (tmp < target) col++
    else row--
  }
  return false
};