let solveKnapsack = function (profits, weights, capacity) {
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
    return knapsackRecursive(profits, weights, capacity, 0);
}