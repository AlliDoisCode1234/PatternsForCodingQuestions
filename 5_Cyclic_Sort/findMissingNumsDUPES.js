// O(N) time | O(1) space

const find_missing_numbers = nums => {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j] = [nums[j], nums[i]]]; // swap
        } else {
            i += 1;
        }
    }
    missingNumbers = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            missingNumbers.push(i + 1);
        }
    }

    return missingNumbers;
}