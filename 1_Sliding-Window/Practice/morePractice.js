const find_averages_of_subarrays = (K, arr) => {
    const result = [];
    let windowSum = 0.0,
        windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd];

        if(windowEnd >= K -1) {
            result.push(windowSum / K);
            windowSum -= arr[windowStart]
            windowStart += 1
        }
    }
    return result;
}