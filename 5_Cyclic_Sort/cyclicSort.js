// O(N) time | O(1) space

const cyclic_sort = nums => {
    let i = 0;

    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
        } else {
            i += 1;
        }
    }

    return nums;
}