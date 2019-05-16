/**
 节点下标奇偶的分别排一块

 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，
 时间复杂度应为 O(nodes)，nodes 为节点总数。
 */



/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    var o = head, p = head.next, e = p
    while (o.next !== null && e.next !== null) {
        o.next = e.next;
        o = o.next;
        e.next = o.next;
        e = e.next;
    }
    o.next = p;
    return head;
};