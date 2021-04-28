const Heap = require('./collections/heap'); //http://www.collectionsjs.com

// O(N * logK) time | O(K) space
//
function find_k_largest_numbers(nums, k) {
    const minHeap = new Heap([], null, ((a, b) => b - a));
    // put first 'K' numbers in the min heap
    for (let i = 0; i < k; i++) {
        minHeap.push(nums[i]);
    }

    // go through the remaining numbers of the array, if the number from the array is bigger than the
    // top(i.e., smallest) number of the min-heap, remove the top number from heap and add the number from array
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > minHeap.peek()) {
            minHeap.pop();
            minHeap.push(nums[i]);
        }
    }

    // the heap has the top 'K' numbers, return them in a list
    return minHeap.toArray();
}