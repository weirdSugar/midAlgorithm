/**
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。


例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */


/**
 *    ！！！ 三指针法  ！！！
 */


/**
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function (nums) {
    nums.sort((a, b) => {
        return a - b
    }, 0)
    var midplusIndex = 0
    var len = nums.length
    for (let i = len - 1; i > 0; i--) {
        if ((nums[i - 1] <= 0 && nums[i] >= 0)) {
            midplusIndex = i
            break;
        }
    }
    if (midplusIndex === 0) return []
    var ret = []
    var i = 0
    var p, q
    for (let i = 0; i < midplusIndex; i++) {
        p = i + 1
        q = len - 1
        if (i === 0 || nums[i] > nums[i - 1])
            while (p < q) {
                var res = nums[p] + nums[q]
                if (res < -nums[i]) {
                    p++
                } else if (res > -nums[i]) {
                    q--
                } else {
                    var tmp = []
                    tmp.push(nums[i], nums[p], nums[q])
                    ret.push([...tmp])
                    p++
                    while (nums[p] === nums[p - 1]) p++
                }
            }
    }
    return ret
};


var test=[-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
console.log(a)