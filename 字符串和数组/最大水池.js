/**
 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 */


/**
* @param {number[]} height
* @return {number}
*/
var maxArea = function (height) {
  var len = height.length
  if (len <= 0) return 0
  var max = 0
  function gen(i, j) {
    if (i < j) {
      const inode = height[i]
      const jnode = height[j]
      if (jnode > inode) {
        var val = (j - i) * inode
        gen(i + 1, j)
      } else {
        var val = (j - i) * jnode
        gen(i, j - 1)
      }
      if (val > max) max = val
    }
  }
  gen(0, len - 1)
  return max
};