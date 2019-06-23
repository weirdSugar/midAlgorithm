/**
给定一个包含1,2,3，一共 n 个元素的数组，原地对它们进行排序，
使得相等的数字相邻，并按照大小顺序排列。

示例:
输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
进阶：

一个直观的解决方案是使用计数排序的两趟扫描算法。
首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
你能想出一个仅使用常数空间的一趟扫描算法吗？
 */



/**
 * 记录第一个 不是 0 的位置为first  
 * 倒数第一个不是 2 位置前一位为 last
 * 0放first  2放last
 */


/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
var sortColors = function (nums) {
  let last = nums.length - 1
  let first = 0

  while (nums[last] === 2) last--
  while (nums[first === 0]) first++
  let i = first
  while (i <= last) {
    let tmp = nums[i]
    if (tmp === 2 && i !== last) {
      [nums[i], nums[last]] = [nums[last], nums[i]]
      last--
      continue
    }
    if (tmp === 0 && i !== first) {
      [nums[i], nums[first]] = [nums[first], nums[i]]
      first++
      continue
    }
    i++
  }
};