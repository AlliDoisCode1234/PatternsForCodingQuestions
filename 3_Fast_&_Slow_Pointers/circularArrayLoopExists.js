// O(N^2) time | O(1) space - where 'N' is the number of elements in the array.
// This complexity is due to the fact that we are iterating all elements
// of the array dn trying to find a cycle for each element.

// We can improve the time complexity with memoization but that would change the space from constant to linear



function circular_array_loop_exists(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isForward = arr[i] >= 0; // if we are moving forward or not
        let slow = i, 
            fast = i;

        // if slow or fast becomes '-1' this means we can't find cycle for this number
        while (true) {
            // move one step for slow pointer
            slow = find_next_index (arr, isForward, slow);
            // move one step for the fast pointer
            fast = find_next_index(arr, isForward, fast);
            if (fast !== -1) {
                // move another step for the fast pointer
                fast = find_next_index(arr, isForward, fast)
            }
            if (slow === -1 || fast === -1 || slow === fast) {
                break;
            }
        }

        if (slow !== -1 && slow === fast) {
            return true;
        }
    }

    return false
}


function find_next_index(arr, isForward, currentIndex) {
    let direction = arr[currentIndex] >= 0;

    if (isForward !== direction) {
        return -1; // change in direction, return -1 
    }

    nextIndex = (currentIndex + arr[currentIndex]) % arr.length;
    if (nextIndex < 0) {
        nextIndex += arr.length // wrap around for negative numbers
    }

    // one element cycle, return -1
    if (nextIndex === currentIndex) {
        nextIndex = -1;
    }

    return nextIndex;
}


console.log(circular_array_loop_exists([1, 2, -1, 2, 2]));
console.log(circular_array_loop_exists([2, 2, -1, 2]));
console.log(circular_array_loop_exists([2, 1, -1, -2]));



// Start from each index of the array to find the circular_array_loop_exists.
// If a number does not have a cycle we will move forward to the next element. 
// The cycle should have more than one element.
// This means that when we move a pointer forward, if the pointer points to the same
// element after the move, we have a one-element cycle. Therefore, we can finish
// our cycle search for the current element.
// We handle the cycle not containing both forward and backward movements by remembering
// the direction of each element while searching for the cycle. If the number is positive,
// the direction will be forward and if the number is negative, the direction will be backward.
// So whenever we move a pointer forward, if there is a change in the direction, we will finish 
// our cycle search there there for the current element.

