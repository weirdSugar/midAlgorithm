/**
 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，
 
 先右上 再左下



示例:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]
 */

 /**
  *  迭代
  *  1. 右上 左下分别为下标 奇偶的时候
  *  2. 边界判断  什么时候换方向 上拐下有两种情况  下拐上也有两种
  */

/**
* @param {number[][]} matrix
* @return {number[]}
*/
var findDiagonalOrder = function (matrix) {
  var vlen = matrix.length
  if (vlen <= 0) return []
  var hlen = matrix[0].length
  var re = []
  function gen(i, j) {
    re.push(matrix[i][j])
    if (i === vlen - 1 && j === hlen - 1) return

    const val = (i + j) % 2
    if (val === 0) {
      if (j === hlen - 1) gen(i + 1, j)
      else if (i == 0) gen(i, j + 1)
      else gen(i - 1, j + 1)
    } else {
      if (i == vlen - 1) gen(i, j + 1)
      else if (j === 0) gen(i + 1, j)
      else gen(i + 1, j - 1)
    }
  }
  gen(0, 0)
  return re
};