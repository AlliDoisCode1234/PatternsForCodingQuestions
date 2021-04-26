const binary_search = (arr, key) => {
    let start = 0,
        end = arr.length - 1,
        isAscending = arr[start] < arr[end];
    while (start <= end) {
        // calc the middle of the current range
        let mid = Math.floor(start + (end - start) / 2);

        if (key === arr[mid]) {
            return mid;
        }
        if (isAscending) {
            if (key < arr[mid]) {
                end = mid - 1; // the 'key' can be in the first half
            } else {
                start = mid + 1;
            }
        } else {
            if (key > arr[mid]) {
                end = mid - 1; // the 'key' can be in the first half
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
}