/**
 * 在未排序的数组中找到第 k 个最大的元素。
 * 
示例 1:
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5


示例 2:
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const arr = []
  for (let val of nums) {
    for (let i = 0; i < k; i++) {
      if (arr[i] === undefined) {
        arr[i] = val
        break
      }
      if (val > arr[i]) {
        arr.splice(i, 0, val)
        break
      }
    }
  }
  return arr[k - 1]
};