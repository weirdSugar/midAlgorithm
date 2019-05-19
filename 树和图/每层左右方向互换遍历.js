
/**
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。
 * （即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。


 例如：
给定二叉树 [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7

返回锯齿形层次遍历如下：
[
  [3],
  [20,9],
  [15,7]
]
 */


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    console.log(root)
    if (root === null) return []
    var right = true
    var arr = [root]
    var re = []
    while (arr.length !== 0) {
        var tmparr = []
        var tmp = []
        if (right) {
            for (let i = 0; i < arr.length; i++) {
                let node = arr[i]
                tmp.push(node.val)
                if (node.left) {
                    tmparr.push(node.left)
                } if (node.right) {
                    tmparr.push(node.right)
                }
            }
        } else {
            for (let i = 0; i < arr.length; i++) {
                let node = arr[i]
                tmp.push(node.val)
                if (node.right) {
                    tmparr.push(node.right)
                } if (node.left) {
                    tmparr.push(node.left)
                }
            }
        }
        re.push(tmp)
        arr = tmparr.reverse()
        right = right ? false : true
    }
    return re
};