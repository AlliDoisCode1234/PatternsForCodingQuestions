// O(n) time | O(1) space

const find_all_duplicates = (nums) => {
    let i = 0;
    while (i < nums.length) {
        let j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
        } else {
            i++
        }
    }


    duplicateNumbers = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            duplicateNumbers.push(nums[i])
        }
    }
    return duplicateNumbers;
}