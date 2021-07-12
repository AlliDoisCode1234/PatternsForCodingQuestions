const length_of_longest_substring = (arr, k) => {
    let windowStart = 0,
        maxLength = 0,
        maxOnesCount = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        if ( arr[windowEnd] === 1) {
            maxOnesCount += 1;
        }

        if ((windowEnd - windowStart + 1 - maxOnesCount) > k) {
            if (arr[windowStart] === 1) {
                maxOnesCount -= 1;
            }
            windowStart += 1;
        }
        
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    return maxLength;
}

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1,] 2));
console.log(length_of_longest_substring([0, 1, 0, 0,1,1,0,1,1,0,0,1,1,] 3))