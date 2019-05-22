/**
 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。
 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。
 如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

 初始状态下，所有 next 指针都被设置为 NULL。

       1                   1
      / \                 /  \
     2   3               2 -> 3
    /\   /\             / \  /  \
   4  5  6 7           4->5->6-> 7
 */


/**
* @param {Node} root
* @return {Node}
*/
var connect = function (root) {
    if (root === null) return null
    
    function build(left, right) {
        left.next = right
        if (left.left) {
            build(left.left, left.right)
            build(right.left, right.right)
            build(left.right, right.left)
        }
    }


    if (root.left) {
        build(root.left, root.right)
    }
    return root
};