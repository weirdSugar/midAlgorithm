/**
给定一个字符串数组，将字母异位词组合在一起。
字母异位词指字母相同，但排列不同的字符串。

示例:
输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]


说明：
所有输入均为小写字母。
不考虑答案输出的顺序。
 */

 
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var map = {};
    for (var str of strs) {
        var sort = str.split('').sort();
        if (map[sort]) {
            map[sort].push(str);
        } else {
            map[sort] = [str];
        }
    }
    return Object.keys(map).map(key => map[key]);
};