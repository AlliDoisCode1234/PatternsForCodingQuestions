const search_floor_of_a_number = (arr, key) => {
    if (key < arr[0]) {
        return -1;
    }

    let start = 0,
        end = arr.length - 1;
    
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (key < arr[mid]) {
            end = mid - 1;
        } else if (key > arr[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    // since the loop is running until 'start <= end', so at the end
    // of the while loop, 'start === end + 1'
    // we are not able to find the element in the given array,
    // so the next smaller number will be arr[end]
    return end;
}