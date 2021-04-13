const find_average_of_subarrays = (K, arr) => {
    const results = [];
    let windowSum = 0.0,
        windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]
        if (windowEndEnd >= K - 1) {
            results.push(windowSum/ K);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    
    return results;
    
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);

// Expected Output: 
// Averages of subarrays of size K: 2.2,2.8,2.4,3.6,2.8