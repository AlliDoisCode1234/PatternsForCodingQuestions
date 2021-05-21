// O(NlogN) time ? | O(N) space ?

const fruits_into_baskets = fruits => {
    let windowStart = 0,
        maxLength = 0,
        fruitFrequency = {};


    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        const rightFruit = fruits[windowEnd];
        if (!(rightFruit in fruitFrequency)) {
            fruitFrequency[rightFruit] = 0;
        }
        fruitFrequency += 1;

        while (Object.keys(fruitFrequency).length > 2) {
            const leftFruit = fruits[windowStart];
            fruitFrequency[leftFruit] -= 1;
            if (fruitFrequency[leftFruit] === 0) {
                delete fruitFrequency[leftFruit]
            }
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)

    }
    return maxLength;
}