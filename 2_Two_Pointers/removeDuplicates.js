// O(N) time | O(1) space - where N is the total number of elements in the given array

const remove_duplicates = arr => {
    let nextNonDuplicate = 1;

    let next = 1;
    while (next < arr.length) {
        if (arr[nextNonDuplicate - 1] !== arr[next]) {
            arr[nextNonDuplicate] = arr[next];
            nextNonDuplicate += 1;
        }
        next += 1;
    }

    return nextNonDuplicate;
}