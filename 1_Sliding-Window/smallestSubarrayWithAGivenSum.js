// 1. ) First we will add-up elements from the beginning of the array until their sum becomes greater than or equal to 'S'.
// 2. ) These elements will constitute our sliding window. We are asked to find the smallest such window having a sum greater than or equal to 'S'.
// // | We will remember the length of this window as the smallest window so far. 
// 3. ) After this, we will keep adding one element in the sliding window 
// // | (i.e, slide the window ahead) in a stepwise fashion.
// 4. ) In each step, we will try to shrink the window from the beginning. We will shrink the window until the window's sum is smaller than 'S' 
// // | again. This is needed as we intend to find the smallest window. This shrinking will also happen in multiple steps; in each step,
// // | we will have to do two things: 
// // | 4.1 ) Check if the current window length is the smallest so far, and if so, remember its length.
// // | 4.2 ) Subtract the first element of the window from the running sum to shrink the sliding window

// O(n) time | O(1) space
function smallest_subarray_with_given_sum(s, arr) {
    let windowSum = 0,
      minLength = Infinity,
      windowStart = 0;
  
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd]; // add the next element
      // shrink the window as small as possible until the 'window_sum' is smaller than 's'
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
  
  
  console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`);
  console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`);
  console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`);
  