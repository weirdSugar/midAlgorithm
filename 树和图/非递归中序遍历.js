/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function (root) {
    var order = []
    var re = []
    var p = root
    while (p != null || order.length !== 0) {
        if (p !== null) {
            order.push(p);
            p = p.left;
        } else {
            p = order.pop()
            re.push(p.val)
            p = p.right
        }
    }
    return re
};