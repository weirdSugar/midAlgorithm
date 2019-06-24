/**
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

示例 1:
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]


示例 2:
输入: nums = [1], k = 1
输出: [1]
说明：

你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。

 */

/**
 *  先用hash表记录次数
 *  将hash表数据发入数组排序
 *  取前k个
 */



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const arr = []
  const map = {}
  const re = []
  for (let itm of nums) {
    if (map[itm] === undefined) {
      map[itm] = 1
    } else {
      map[itm] += 1
    }
  }
  for (let key in map) {
    arr.push({ 'key': key, 'val': map[key] })
  }
  //     arr.sort((v1,v2)=>{return v2.val-v1.val})
  arr.sort(({ 'val': v1 }, { 'val': v2 }) => { return v2 - v1 })
  for (let i = 0; i < k; i++) {
    re.push(arr[i].key)
  }
  return re
};