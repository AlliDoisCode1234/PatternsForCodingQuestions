const find_duplicate = arr => {
    let slow = arr[0],
        fast = arr[arr[0]];
    
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[arr[fast]];
    }

    // find cycle length
    let current = arr[arr[slow]],
        cycleLength = 1;
    
    while (current !== arr[slow]) {
        current = arr[current];
        cycleLength += 1;
    }
    return find_start(arr, cycleLength);
}

function find_start(arr, cycleLength) {
        let pointer1 = arr[0],
            pointer2 = arr[0];
        
        // move pointer2 ahead 'cycleLength' steps
        while (cycleLength > 0) {
            pointer2 = arr[pointer2];
            cycleLength -= 1;
        }

        // increment both pointers until they meet at the start of the cycle
        while (pointer1 !== pointer2) {
            pointer1 = arr[pointer1];
            pointer2 = arr[pointer2];
        }
        return pointer1;
}
