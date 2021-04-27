class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// O(n) time | O(1) space

function find_cycle_start(head) {
    cycle_length = 0;
    // find the LinkedList cycle
    let slow = head,
        fast = head;
    while ((fast !== null && fast.next !== null)) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) { // found the cycle
            cycle_length = calculate_cycle_length(slow);
            break;
        }
    }
    return find_cycle_start(head, cycle_length);
}

function calculate_cycle_length(slow) {
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

function find_start(head, cycle_length) {
    let pointer1 = head,
        pointer2 = head;
    // move pointer2 ahead 'cycle_length' nodes
    while (cycle_length > 0) {
        pointer2 = pointer2.next;
        cycle_length -= 1;
    }
    // increment both pointers until they meet at the start of the cycle
    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return pointer1;
}