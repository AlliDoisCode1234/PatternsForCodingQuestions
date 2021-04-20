// O(N) time | O(1) space

const find_missing_number = nums => {
    let i = 0;
    const arrayLength = nums.length;
    while (i < arrayLength) {
        let j = nums[i];
        if (nums[i] < arrayLength && nums[i] !== nums[j]) {
            [nums[i], nums[j] = [nums[j], nums[i]]]; // swap
        } else {
            i += 1;
        }
    }


    // find the first number missing from its index, that will be our required number
    for (let i = 0; i < arrayLength; i++) {
        if (nums[i] !== i) {
            return i
        }
    }

    return arrayLength;
}