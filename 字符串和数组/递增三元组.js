/**
给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。
数学表达式如下:

如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。

示例 1:
输入: [1,2,3,4,5]
输出: true

示例 2:
输入: [5,4,3,2,1]
输出: false
 */

/**
 * 动态规划，
 * b代表一元组，碰上小的直接换
 * a代表二元组最后一位，一元组碰上大的与a比较。比a小换a
 * 碰上比a大的返回 true 否则 false 
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    if (nums.length < 3) return false
    let a = null
    var b = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let tmp = nums[i]
        if (tmp > a && a !== null) {
            return true
        }
        if (nums[i] <= b) {
            b = nums[i]
        } else if (tmp < a || a === null) {
            a = tmp
        }
    }
    return false
}