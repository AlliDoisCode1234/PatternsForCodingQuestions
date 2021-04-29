const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// O(N * logK) time | O(K) space
function merge_lists(lists) {
    const minHeap = new Heap([], null, ((a, b) => b.value - a.value));

    // put the root of each list in the min heap
    lists.forEach((a) => {
        if (a !== null) {
            minHeap.push(a);
        }
    });

    // take the smallest(top) element from the min-heap and add it to the result
    // if the top element has a next element add it to the heap
    let resultHead = null,
        resultTail = null;
    while (minHeap.length > 0) {
        const node = minHead.pop();
        if (resultHead === null) {
            resultHead = resultTail = node;
        } else {
            resultTail.next = node;
            resultTail = resultTail.next;
        }
        if (node.next !== null) {
            minHeap.push(node.next)
        }
    }
    return resultHead;

}