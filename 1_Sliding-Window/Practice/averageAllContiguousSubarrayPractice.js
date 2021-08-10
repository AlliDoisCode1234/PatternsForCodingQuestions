const averageSubarray = (arr, K) => {
    let windowStart = 0,
        windowSum = 0,
        result = [];

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]
        
        while(windowEnd >= K - 1){
            result.push(windowSum / K)
            windowSum -= arr[windowStart]
            windowStart += 1
        }
    }
    return result;
}

console.log(averageSubarray([1, 3, 2, 6, -1, 4, 1, 8, 2], 5), [2.2, 2.8, 2.4, 3.6, 2.8])

// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5