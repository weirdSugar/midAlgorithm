/**
根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
*/




/**
        preorder第一个元素为根 inorder中找到这个元素位置
        此之前为左子树(长l1) 之后为右子树(l2)
        !! preorder[1] - preorder[l1] 为左子树 之后为右子树 !!
        递归
        递归到一个节点的时候继续 就会返回 null
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    function build(preL, preR, inL, inR) {
        if (preL > preR || inL > inR) {
            return null;
        }
        let node = {
            val: preorder[preL],
            left: null,
            right: null
        }
        // 在中序遍历中找出根节点，以此区分左右子树
        let index = 0;
        for (let i = inL; i <= inR; i++) {
            if (inorder[i] === preorder[preL]) {
                index = i;
                break;
            }
        }
        // 左子树的结点数量
        let leftNum = index - inL;
        // 递归构建左右子树
        node.left = build(preL + 1, preL + leftNum, inL, index - 1);
        node.right = build(preL + leftNum + 1, preR, index + 1, inR);
        return node;
    }
    return build(0, preorder.length - 1, 0, inorder.length - 1);
};