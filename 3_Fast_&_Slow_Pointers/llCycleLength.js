class Node {
    constructor(value, next = null) {
        this.vale = value;
        this.next = next;
    }
}

// O(N) time | O(1) space - where N is the length of the linkedList

const find_cycle_length = head => {
    let slow = head,
        fast = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) { // found the cycle
            return calculate_cycle_length(slow);
        }
    }
    return 0;
}


const calculate_cycle_length = slow => {
    let current = slow,
        cycle_length = 0;
    while (true) {
        current = current.next;
        cycle_length += 1;
        if (current === slow) {
            break;
        }
    }
    return cycle_length;
}