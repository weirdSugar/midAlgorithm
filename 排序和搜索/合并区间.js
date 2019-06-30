/**
 给出一个区间的集合 乱序，请合并所有重叠的区间。

示例 1:
输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].


示例 2:
输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */

/**
 * 一共四种情况
 * 通过x1先排序 变为两种情况
 */
/**
* @param {number[][]} intervals
* @return {number[][]}
*/
var merge = function (intervals) {
  const len = intervals.length
  if (len < 2) return intervals
  intervals.sort((p, q) => {
    return p[0] - q[0]
  })
  const re = [intervals[0]]
  for (let i = 1; i < len; i++) {
    let tmp = intervals[i]
    if (tmp[0] <= re[0][1]) {
      if (tmp[1] <= re[0][1]) { }
      else {
        re[0][1] = tmp[1]
      }
    } else {
      re.unshift(tmp)
    }
  }
  return re
};