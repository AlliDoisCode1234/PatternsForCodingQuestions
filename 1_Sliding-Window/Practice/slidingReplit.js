// INVITE HERE:
// https://replit.com/join/upaiytlgwq-jamesfowler8

// Problem statement: 
//
// Given an array, find the average of all contiguous subarrays of size 'K' in it. 


// Input: Array = [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
// For the first 5 numbers (subarray from index 0-4), the average is: (1+3+2+6−1)/5=>2.2
// The average of next 5 numbers (subarray from index 1-5) is: (3+2+6−1+4)/5=>2.8
// For the next 5 numbers (subarray from index 2-6), the average is: (2+6−1+4+1)/5=>2.4


// Output: [2.2, 2.8, 2.4, 3.6, 2.8]


// Brute Force

// function find_averages_of_subarrays(K, arr) {
//   const result = [];
//   for (let i = 0; i < arr.length - K + 1; i++) {
//     // find sum of next 'K' elements
//     sum = 0.0;
//     for (let j = i; j < i + K; j++) {
//       sum += arr[j];
//     }
//     result.push(sum / K); // calculate average
//   }

//   return result;
// }


// const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
// console.log(`Averages of subarrays of size K: ${result}`);


// Expected Output: 
// Averages of subarrays of size K: 2.2,2.8,2.4,3.6,2.8

// Time Complexity:
// Since for every element of the input array, we are calculating the sum of its next 'K' elements, the time complexity of the above algorithm will be O(N*K) where 'N' is the number of elements in the input array.






// Sliding Window is Better!!!




// Input: Array = [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

// 1, 3, [2, 6, -1, 4, 1]
//        S            E



function find_averages_of_subarrays(K, arr) {
  const result = [];
  let windowSum = 0.0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculate the average
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }

  return result;
}


// const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
// console.log(`Averages of subarrays of size K: ${result}`);

// Expected Output: 
// Averages of subarrays of size K: 2.2,2.8,2.4,3.6,2.8

// Also reduce the Time complexity to O(N) as we save time on not going through the whole sub array to find the sum, instead by just using computation or math, we effecitvely are working in constant time for the most part except for the initial iteration where we inherit the O(N) time. 