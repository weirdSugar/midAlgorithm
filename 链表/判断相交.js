/**
编写一个程序，
找到两个单链表相交的起始节点。


输入：listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8

输入解释：相交节点的值为 8 
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

注意：
如果两个链表没有交点，返回 null.
在返回结果后，两个链表仍须保持原有的结构。
可假定整个链表结构中没有循环。
程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
 */


 /**
  cross为相交的nodes，
  a为链表A中相交之前的nodes
  b为链表B中相交之前的nodes

  核心思想就是
  a+cross+b=b+cross+a

  p1到尾时串到b首
  p2到尾时串到a首

  p1 p2 串到对方链首的时候已经解决链表不同长度的问题
  再next到cross时候next了同样次数
  */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headA == null || headB == null) return null;
    var pA = headA, pB = headB;
    // 在这里第一轮体现在pA和pB第一次到达尾部会移向另一链表的表头, 而第二轮体现在如果pA或pB相交就返回交点, 不相交最后就是null==null
    while (pA != pB) {
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }
    return pA;
};