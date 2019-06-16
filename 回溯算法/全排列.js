
//固定数字


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const len = nums.length
  var re = []
  function back_track(arr, steady) {
    const len = arr.length
    if (len === 1) {
      re.push([...steady, arr[0]])
      return
    }
    for (let i = 0; i < len; i++) {
      let tmp = [...arr.slice(0, i), ...arr.slice(i + 1)]
      back_track(tmp, [...steady, arr[i]])
    }
  }
  back_track(nums, [])
  return re
};
