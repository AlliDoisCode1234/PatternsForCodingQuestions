const search_ceiling_of_a_number = (arr, key) => {
    const n = arr.length;
    if (key > arr[n - 1]) {
        return -1;
    }

    let start = 0,
        end = n - 1;
    
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (key < arr[mid]) {
            end = mid - 1;
        } else if (key > arr[mid]) {
            start = mid + 1;
        } else {
            return mid
        }
    }
    // since the loop is running until 'start <= end', so at the end
    // of the while loop, 'start === end + 1'
    // we are not able to find the element in the given array, so the 
    // next big number will be arr[start]

    return start;
}