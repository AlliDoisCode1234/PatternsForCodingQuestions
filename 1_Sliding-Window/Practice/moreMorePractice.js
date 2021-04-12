const max_sub_array_of_size_k = (k, arr) => {
    let maxSum = 0,
        windowSum = 0,
        windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd];

        if (windowEnd >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart]
            windowStart += 1;
        }
    }
    return maxSum;
}