/**
给出两个 非空 的链表用来表示两个非负的整数。
其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

将这两个数相加起来，返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */



/**
 * dummy node
 */


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var re = {
        val: 0,
        next: null
    }
    var p = re, p1 = l1, p2 = l2, tmp = 0
    while (p1.next !== null || p2.next !== null) {
        if (p1.next === null) {
            p1.next = {
                val: 0,
                next: null
            }
        }
        if (p2.next === null) {
            p2.next = {
                val: 0,
                next: null
            }
        }
        tmp += p1.val + p2.val
        if (tmp >= 10) {
            p.val = tmp - 10
            tmp = 1
        } else {
            p.val = tmp
            tmp = 0
        }
        p1 = p1.next
        p2 = p2.next
        p.next = {
            val: 0,
            next: null
        }
        p = p.next
    }
    tmp += p1.val + p2.val
    if (tmp >= 10) {
        p.val = tmp - 10
        p.next = {
            val: 1,
            next: null
        }
    } else {
        p.val = tmp
    }
    return re
};