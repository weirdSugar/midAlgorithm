/**
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。

示例 2：
输入: "cbbd"
输出: "bb"
 */



/**
* @param {string} s
* @return {string}
*/
var longestPalindrome = function (s) {
    if (s.length < 2) return s
    var tmp = ''
    var len = s.length
    for (let i = len; i >= 2; i--) {
        for (let j = 0; j <= len - i; j++) {
            tmp = s.substr(j, i)
            if (check(tmp)) return tmp
        }
    }
    return s[0]
    function check(str) {
        let i = 0, j = str.length - 1
        while (i < j) {
            if (str[i] !== str[j]) return false
            i++
            j--
        }
        return true
    }
}