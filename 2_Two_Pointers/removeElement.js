// O(N) time | O(1) space - where N is the total number of elements in the given array

const remove_element = (arr, key) => {
    let nextElement = 0; // index of the next element which is not 'key'
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== key) {
            arr[nextElement] = arr[i];
            nextElement += 1;
        }
    }

    return nextElement;
}