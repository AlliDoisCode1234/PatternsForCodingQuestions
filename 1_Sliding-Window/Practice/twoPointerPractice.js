// O(N) time | O(1) space - where n is the number of elements in the given array

function remove_duplicates(arr) {
    // index of the next non-duplicate element
    let nextNonDuplicate = 1;

    let i = 1;
    while (i < arr.length) {
        if (arr[nextNonDuplicate - 1] !== arr[i]) {
            arr[nextNonDuplicate] = arr[i];
            nextNonDuplicate += 1;
        }
        i += 1;
    }

    return nextNonDuplicate;
}