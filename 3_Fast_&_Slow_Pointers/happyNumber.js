// O(logN) time | O(1) space
//

function find_happy_number(num) {
    let slow = num,
        fast = num;
    while(true){
        slow = find_square_sum(slow) // move one step
        fast = find_square_sum(find_square_sum(fast)); // move two steps
        if (slow === fast) { // found the cycle
            break;
        }
    }
    return slow === 1; // see if the cycle is stuck on the number '1'
}

function find_square_sum(num) {
    let sum = 0;
    while ((num>0)) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(find_happy_number(23));
console.log(find_happy_number(12));


// taking in a Number, we are to find if it is a Happy Number
// we initialize a fast and slow pointer to the Number
// create a while loop to run while true (until we break out)
// in our while loop, we move our slow pointer one step and our fast pointer two steps w/ a helper function
// if slow and fast meet (equal each other) break out of while loop
// after while loop return slow === 1 to see if the cycle is stuck on the number 1
// Our helper function is then declared and we store sum in a variable
// while the num we pass in the helper function is greater than 0
// declare digit variable to equal num modulus 10
// add digit multiply digit to sum
// let num = the floor of our num divided by 10
// outside of our while loop we return sum;

