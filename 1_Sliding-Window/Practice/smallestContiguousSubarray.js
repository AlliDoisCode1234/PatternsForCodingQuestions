// const subContiguous = (a, s) => {
//     let windowStart = 0,
//         currentSum = a[windowStart],
//         minLength = -Infinity;

//     for (let windowEnd = 0; windowEnd < a.length; windowEnd++){
//         currentSum += a[windowEnd]
//         if(currentSum >= s ){
//             let currentLength = windowEnd - windowStart + 1
//             if (currentLength > minLength){
//                 return currentLength
//             }
//         }
//     }

// }

// console.log(subContiguous([2, 1, 5, 2, 3, 2], 7), 2)


const smallestSubarrayWithGiveSum = (s, arr) => {
    let windowSum = 0, 
        minLength = Infinity,
        windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.minLength; windowEnd++){
        windowSum += arr[windowEnd];

        while (windowSum >= s) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }

    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
}