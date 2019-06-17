/**
示例:

输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */


/**
* @param {number[]} nums
* @return {number[][]}
*/
var subsets = function (nums) {
  const len = nums.length
  let re = []
  function back_trace(idx, arr) {
    for (let i = idx + 1; i < len; i++) {
      const tmp = [...arr, nums[i]]
      re.push(tmp)
      back_trace(i, tmp)
    }
  }
  back_trace(-1, [])
  re.push([])
  return re
};