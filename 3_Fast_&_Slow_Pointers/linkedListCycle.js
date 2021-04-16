class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


// O(N) time | O(1) space

const has_cycle = head => {
    let slow = head,
        fast = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}