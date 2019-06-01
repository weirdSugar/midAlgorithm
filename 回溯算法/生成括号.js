/**
给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

 /**
  * 迭代   
  */


/**
* @param {number} n
* @return {string[]}
*/
var generateParenthesis = function (n) {
  var re = []
  function gen(l, r, tmp) {
    if (r <= 0) {
      re.push(tmp)
      return
    }
    if (l > 0)
      gen(l - 1, r, tmp + "(")

    if (r > l)
      gen(l, r - 1, tmp + ")")

  }
  gen(n, n, "")
  return re
}