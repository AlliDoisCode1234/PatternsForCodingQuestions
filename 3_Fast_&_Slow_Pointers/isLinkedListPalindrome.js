class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// O(N) time | O(1) space - where 'N' is the number of nodes in the LinkedList
function is_palindromic_linked_list(head) {
    if (head === null || head.next === null) {
        return true;
    }

    // find the middle of the LinkedList
    let slow = head,
        fast = head;
        while((fast !== null && fast.next !== null)) {
            slow = slow.next
            fast = fast.next.next;
        }

        let headSecondHalf = reverse(slow) // reverse the second half
        // store the head of reversed part to revert back later
        let copyHeadSecondHalf = headSecondHalf;

        // compare the first and the second half
        while ((head !== null && headSecondHalf !== null)) {
            if (head.value !== headSecondHalf.value) {
                break; // not a palindrome
            }

            head = head.next;
            headSecondHalf = headSecondHalf.next;
        }
        reverse(copyHeadSecondHalf) // revert the reverse of the second half

        if(head === null || headSecondHalf === null) { // if both halves match
            return true;
        }

        return false
}

function reverse(head) {
    let prev = null;
    while (head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}


const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

head.next.next.next.next.next = new Node(2);
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);



// 1. Use Fast & Slow pointers method to find the middle node of the linked list 
// 2. Once we have th emiddle of the LinkedList, we will reverse the second half 
// 3. Then, we will compare the first half with the reversed second half to see if the LL is a palindrome 
// 4. Finally, we will reverse the second half of the LL again to revert and bring the LL back to its original form 