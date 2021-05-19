// O(N) time | O(1) space

function shortest_window_sort(arr) {
    let low = 0,
        high = arr.length - 1;
    // find the first number out of sorting order from the beginning
    while ((low < arr.length - 1 && arr[low] <= arr[low + 1])) {
        low += 1;
    }

    if (low === arr.length - 1) { // if the array is sorted
        return 0;
    }

    // find the first number out of sorting order from the end
    while (high > 0 && arr[high] >= arr[high - 1]) {
        high -= 1;
    }

    // find the maximum and minimum of the subarray
    let subarrayMax = -Infinity,
        subarrayMin = Infinity;
    for (k = low; k < high + 1; k++) {
        subarrayMax = Math.max(subarrayMax, arr[k]);
        subarrayMin = Math.min(subarrayMin, arr[k])
    }

    // extend the subarray to include any number which is bigger than the minimum of the subarray
    while (low > 0 && arr[low - 1] > subarrayMin) {
        low -= 1;
    }

    // extend the subarray to include any number which is smaller than the maximum of the subarray
    while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
        high += 1;
    }

    return high - low + 1;
}