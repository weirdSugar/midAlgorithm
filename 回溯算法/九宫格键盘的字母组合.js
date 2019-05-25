/**
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
给出数字到字母的映射如下（与电话按键相同）。

1        2(abc)      3(def)
4(ghi)   5(jkf)      6(mno)
7(pqrs)  8(tuv)      9(wxyz)

示例:
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {

  if (digits.length == 0) {
    return []
  }
  var re = [''], tmp = []
  const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  }
  for (let o = 0; o < digits.length; o++) {
    tmp = []
    const str = map[digits[o]]
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < re.length; j++) {
        tmp.push(re[j] + str[i])
      }
    }
    re = tmp
  }
  return re
};
const letterCombinations = digits => {
  if (!digits || digits === "1") return [];
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };
  // 把字符串转成对应的数组形式
  const digitsArr = Array.from(digits).map(v => map[v]);
  // 递归调用
  const combiner = digitsArr => {
    // 终止条件
    if (digitsArr.length === 1)
      return digitsArr.reduce((a, b) => a.concat(b), []);
    // 取出下标0,1,和剩余的
    const [a, b, ...other] = digitsArr;
    // 组合、flat
    const temp = a
      .map(v => b.map(v1 => v + v1))
      .reduce((a, b) => a.concat(b), []);
    return combiner([temp, ...other]);
  };
  return combiner(digitsArr);
};