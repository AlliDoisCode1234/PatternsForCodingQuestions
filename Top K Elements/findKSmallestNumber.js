const Heap = require('./collections/heap'); //http://www.collectionsjs.com

function find_Kth_smallest_number(nums, k) {
    maxHeap = new Heap();
    // put first k numbers in the max heap
    for (let i = 0; i < k; i++) {
        maxHeap.push(nums[i]);
    }

    // go through the remaining numbers of the array, if the number from the array is smaller than the
    // top(biggest) number of the heap, remove the top number from heap and add the number from array
    for (let i = k; i < nums.length; i++) {
        if (nums[i] < maxHeap.peek()) {
            maxHeap.pop();
            maxHeap.push(nums[i]);
        }
    }

    // the root of the heap has the Kth smallest number
    return maxHeap.peek();
}