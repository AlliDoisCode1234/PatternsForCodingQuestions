class Node {
    constructor (value, next = null){
        this.value = value;
        this.next = next;
    }

    print_list(){
        temp = this;
        while(temp !== null) {
            process.stdout.write(`${temp.value}`);
            temp = temp.next;
        }
        console.log();
    }
}


// O(N) time | O(1) space - where 'N' is the number of nodes in the LL
function reorder(head) {
    if (head === null || head.next === null) {
        return;
    }

    // find middle of the LinkedList
    let slow = head,
        fast = head;
    while((fast !== null || fast.next !== null)) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // slow is now pointing to the middle node
    let headSecondHalf = reverse(slow); // reverse the second half
    headFirstHalf = head;

    // rearrange  to produce the LinkedList in the required order
    while (headFirstHalf !== null && headSecondHalf !== null) {
        let temp = headFirstHalf.next;
        headFirstHalf.next = headSecondHalf;
        headFirstHalf = temp;

        temp = headSecondHalf.next;
        headSecondHalf.next = headFirstHalf;
        headSecondHalf = temp;
    }

    // set the next of the last node to 'null
    if (headFirstHalf !== null) {
        headFirstHalf.next = null;
    }
}

function reverse(head) {
    let prev = null;
    while (head !== null){
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}


// 1. We can use the Fast & Slow pointers method to find the middle node of the localStorage
// 2. Once we have the middle of the localStorage, we will reverse the second half of the LL 
// 3. Finally, we iterate through the first half and the reversed second half to produce a LL in required order