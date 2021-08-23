// brute force solution

// O(n^2) time | O(n) space

function solveKnapsack(profits, weights, capacity) {

    return knapsackRecursive(profits, weights, capacity, 0)
}


function knapsackRecursive(profits, weights, capacity, currentIndex) {
    // base checks
    if (capacity <= 0 || currentIndex >= profits.length) return 0;

    // recursive call after choosing the element at the currentIndex
    // if the weight of the element at currentIndex exceeds the capacity, we shouldn't process this
    let profit1 = 0;
    if (weights[currentIndex] <= capacity )  {
        profit1 = 
            profits[currentIndex] + 
            knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1);
    }

    // recursive call after excluding the element at the currentIndex
    const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);

    return Math.max(profit1, profit2)

}


// we take our main function and pass its parameters into our recursive helper function that we will be returning
// we also add an 0 to the parameters of our recursive helper function to keep track of the currentIndex in weights and profits Array
// our base case is if our capacity is 0 or or profits array length is 0, we'll return 0
// initialize a profit1 variable to equal 0
// if the element at the current index in the weights array is less than or equal to the capacity
// then we let our profit1 variable equal equal the element at our currentIndex in our profits array plus
// the recursive call of our capacity minus the element at our currentIndex in the weights array
// and we add 1 to our currentIndex in the recursive call to iterate through our weights and profits arrays
// outside of our if logic, we declare our profit2 to equal our recursive call of the capacity, as well as currentIndex plus 1
// we return the greater of either profit1 or profit2







// Top Down Memoization
// 
//
//


// O(N * C) time | O(N * C) space - where 'N' is the number of items and 'C' is the knapsack capacity
function solveKnapsack(profits, weights, capacity){
    const dp = [];

    function knapsackRecursive(profits, weights, capacity, currentIndex) {
        // base checks
        if (capacity <= 0 || currentIndex >= profits.length) return 0;

        dp[currentIndex] = dp[currentIndex] || [];
        if (typeof dp[currentIndex][capacity] !== 'undefined') {
            return dp[currentIndex][capacity];
        }

        // recursive call after choosing the element at the currentIndex
        // if the weight of the element at currentIndex exceeds the capacity, we shouldn't process this
        let profit1 = 0;
        if (weights[currentIndex] <= capacity) {
            profit1 =
                profits[currentIndex] +
                knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1);
        }

        // recursive call after excluding the element at the currentIndex
        const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);

        dp[currentIndex][capacity] = Math.max(profit1, profit2);
        return dp[currentIndex][capacity];
    }

    return knapsackRecursive(profits, weights, capacity, 0)
}






// Bottom-up Dynamic Programming
//
//
//

// O(N * C) time | O(N * C) - where 'N' represents total items, and 'C' is the maximum capacity
function solveKnapsack(profits, weights, capacity) {
    const n = profits.length;
    if (capacity <= 0 || n == 0 || weights.length != n) return 0;

    const dp = Array(profits.length)
        .fill(0)
        .map(() => Array(capacity + 1).fill(0));

    // populate the capacity=0 columns; with '0' capacity we have '0' profit
    for (let i = 0; i < n; i++) dp[i][0] = 0;

    // if we have only one weight, we will take it if it is not more than the capacity
    for (let c = 0; c <= capacity; c++){
        if (weights[0] <= c) dp[0][c] = profits[0];
    }

    // process all sub-arrays for all the capacities
    for (let i = 1; i < n; i++) {
        for (let c = 1; c <= capacity; c++) {
            let profit1 = 0,
                profit2 = 0;
            // include the item, if it is not more than the capacity
            if (weights[i] <= c) profit1 = profits[i] + dp[i - 1][c - weights[i]];
            // exclude the item
            profit2 = dp[i - 1][c];
            // take maximum
            dp[i][c] = Math.max(profit1, profit2);
        }
    }

    // maximum profit will be at the bottom-right corner.
    return dp[n - 1][capacity]
}

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);




// // Print the set of items included in the knapsack
// // VARIANT
//
//
//


function solveKnapsack(profits, weights, capacity) {
    const n = profits.length;
    if (capacity <= 0 || n == 0 || weights.length != n) return 0

    const dp = Array(profits.length)
        .fill(0)
        .map(() => Array(capacity + 1).fill(0));

    // populate the capacity = 0 columns; with '0' capacity we have '0' profit
    for (let i = 0; i < n; i++) dp[i][0] = 0;

    // if w have only one weight, we will take it if it is not more than the capacity
    for (let c = 0; c <= capacity; c++){
        if (weights[0] <= c) dp[0][c] = profits[0];
    }

    // process all sub-arrays for all the capacities
    for (let i = 1; i < n; i++){
        for (let c = 1; c <= capacity; c++) {
            let profit1 = 0,
                profit2 = 0;

            // include the item, if it is not more than the capacity
            if (weights[i] <= c) profit1 = profits[i] + dp[i - 1][c - weights[i]];
            // exclude the item
            profit2 = dp[i - 1][c]
            // take maximum
            dp[i][c] == Math.max(profit1, profit2)
        }
    }

    let selectedWeights = '';
    let totalProfit = dp[weights.length - 1][capacity];
    let remainingCapacity = capacity;
    for (let i = weights.length - 1; i > 0; i--) {
        if (totalProfit != dp[i - 1][remainingCapacity]) {
            selectedWeights = `${weights[i]} ${selectedWeights}`;
            remainingCapacity -= weights[i];
            totalProfit -= profits[i]
        }
    }
    
    if (totalProfit != 0) selectedWeights = `${weights[0]} ${selectedWeights}`;

    console.log(`Selected weights: ${selectedWeights}`);

    // maximum profit will be at the bottom-right corner.
    return dp[n - 1][capacity];

}



var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);




// IMPROVED SPACE COMPLEXITY
// from O(N * C) to O(C)
//
 //
 //

// O(N * C) time | O(C) space where 'N' represents the total items and 'C' the maximum capacity
 function solveKnapsack(profits, weights, capacity) {
     const n = profits.length;
     if (capacity <= 0 || n == 0 || weights.length != n) return 0;

     // we only need one previous row to find the optimal solution, overall we need '2' rows
     // the above solution is similar to the previous solution, the only difference is that
     // we use `i%2` instead of `i` and `(i-2)%2` instead of `i-1`
     const dp = Array(2)
        .fill(0)
        .map(() => Array(capacity + 1).fill(0));


    // if we have only one weight, we will take it if it is not more than the capacity
    for (let c = 0; c <= capacity; c++) {
        if (weights[0] <= c) dp[0][c] = dp[1][c] = profits[0];
    }


    // process all sub-arrays for all the capacities
    for (let i = 1; i < n; i++) {
        for (let c = 1; c <= capacity; c++) {
            let profit1 = 0,
                profit2 = 0;
            // include the item, if it is not more than the capacity
            if (weights[i] <= c) profit1 = profits[i] + dp[(i - 1) % 2][c - weights[i]];
            // exclude the item
            profit2 = dp[(i - 1) % 2][c];
            // take maximum
            dp[i % 2][c] = Math.max(profit1, profit2)
        }
    }

    // maximum profit will be at the bottom-right corner.
    return dp[(n - 1) % 2][capacity];
 }
 ////




 /// 
 ///

 // improved space like above with an array
 //
 //
 //
 //


// O(N * C) time | O(C) space - where 'N' represents the number of items and 'C' is the maximum capacity
 function solveKnapsack(profits, weights, capacity) {
     const n = profits.length;
     if (capacity <= 0 || n == 0 || weights.length != n) return 0

     const dp = Array(capacity + 1).fill(0);

     // if we have only one weight, we will take it if it is not more than the capacity
     for (let c = 0; c <= capacity; c++) {
         if (weights[0] <= c) dp[c] = profits[0]
     }

     // process all sub-arrays for all the capacities
     for (let i = 1; i < n; i++) {
         for (let c = capacity; c >= 0; c--) {
             let profit1 = 0,
                profit2 = 0;

            // include the item, if it is not more than the capacity
            if (weights[i] <= c) profit1 = profits[i] + dp[c - weights[i]];
            // exclude the item
            profit2 = dp[c];
            // take maximum
            dp[c] = Math.max(profit1, profit2);
         }
     }

     // maximum profit will be at the bottom-right corner.
     return dp[capacity];
 };