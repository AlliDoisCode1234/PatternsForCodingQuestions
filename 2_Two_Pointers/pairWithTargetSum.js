// O(N) time | O(1) space - where N is the total number of elements in the given array

const pair_with_target_sum = (arr, targetSum) => {
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === targetSum) {
            return [left, right];
        }

        if (targetSum > currentSum) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return [-1, -1]
}