// average of all contiguous subarrays of size k
// Output: array of all average subarrays


// [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

// (1 + 3 + 2 + 6 + (-1)) / 5 => 2.2
// (3 + 2 + 6 + (-1) + 4) / 5 => 2.8

// [2.2, 2.8, 2.4, 3.6, 2.8]



// O (N * K) time | O(1)
// const find_averages_of_subarrays = (K, arr) {

//     const result = [];

//     for (let i = 0; i < arr.length - K + 1; i++){
//         // find sum of next 'K' elements
//         let sum = 0.0;
//         for (let j = i; j < i + K; j++){
//             sum += arr[j]
//         }
//         result.push(sum/K) // calc average
//     }


//     return result;

// }

// expected Output: [2.2, 2.8, 2.4, 3.6, 2.8]


// [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

// (1 + 3 + 2 + 6 + (-1)) / 5 => 2.2
// (3 + 2 + 6 + (-1) + 4) / 5 => 2.8

// [2.2, 2.8, 2.4, 3.6, 2.8]


const find_averages_of_subarrays = (K, arr) => {

    const result = [];

    let windowSum = 0.0,
        windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]; // all next elements
        // until we get to length K - 1
        // slide the window, we don't need to slide if we've not hit the required size of K

        if (windowEnd >= K - 1) {
            result.push(windowSum / K);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }

    return result;

}


// expected Output: [2.2, 2.8, 2.4, 3.6, 2.8]
