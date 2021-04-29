const Heap = require('./collections/heap'); //http://www.collectionsjs.com

// O(N * logN) time | O(N) space
//

function minimum_cost_to_connect_ropes(ropesLengths) {
    // add al ropes to the minHeap
    const minHeap = new Heap(ropeLengths, null, ((a, b) => b - a));

    // go through the values of the heap, in each step take top (i.e., lowest) rope lengths from the min heap
    // connect them and push the result back to the min heap
    // keep doing this until the heap is left with only one rope

    let result = 0;
    while (minHeap.length > 1) {
        const tempCost = minHeap.pop() + minHeap.pop();
        result += tempCost
        minHeap.push(tempCost);
    }

    return result;
}