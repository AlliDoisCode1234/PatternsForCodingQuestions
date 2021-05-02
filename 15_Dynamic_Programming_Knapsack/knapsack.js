let solveKnapsack = function (profits, weights, capacity) {
    const n = profits.length;
    if (capacity <= 0 || n == 0 || weights.length !== n) return 0;

    const dp = Array(capacity + 1).fill(0);

    // if we have only one weight, we will take it if it is not more than the capacity
    for (let c = 0; c <= capacity; c++) {
        if (weights[0] <= c) dp[c] = profits[0];
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
            // take the maximum
            dp[c] = Math.max(profit1, profit2);
        }
    }

    return dp[capacity]
}








// let solveKnapsack = function (profits, weights, capacity) {
//     const dp = [];

//     function knapsackRecursive(profits, weights, capacity, currentIndex) {
//         // base checks
//         if (capacity <= 0 || currentIndex >= profits.length) return 0;

//         dp[currentIndex] = dp[currentIndex] || [];
//         if (typeof dp[currentIndex][capacity] !== 'undefined') {
//             return dp[currentIndex][capacity];
//         }

//         // recursive call after choosing the element at the currentIndex
//         // if the weight of the element at currentIndex exceeds the capacity, we shouldn't process this
//         let profit1 = 0;
//         if (weights[currentIndex] <= capacity) {
//             profit1 =
//                 profits[currentIndex] +
//                 knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1);
//         }

//         // recursive call after excluding the element at the currentIndex
//         const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);

//         dp[currentIndex][capacity] = Math.max(profit1, profit2);
//         return dp[currentIndex][capacity];
//     }
//     return knapsackRecursive(profits, weights, capacity, 0);
// }