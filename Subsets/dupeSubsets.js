const find_subsets = (nums) => {
    nums.sort((a, b) => a - b);
    const subsets = [];
    subsets.push([]);
    let startIdx = 0,
        endIdx = 0;
    for (let i = 0; i < nums.length; i++) {
        startIdx = 0;
        // if current and the previous elements are the same, create new subsets only from the subsets
        // added in the previous step
        if (i > 0 && nums[i] === nums[i - 1]) {
            startIdx = endIdx + 1;
        }
        endIdx = subsets.length - 1;
        for (let j = startIdx; j < endIdx + 1; j++) {
            // create a new subset from the existing subset and add the current element to it
            const set1 = subsets[j].slice(0);
            set1.push(nums[i]);
            subsets.push(set1)
        }
    }
    return subsets;
}