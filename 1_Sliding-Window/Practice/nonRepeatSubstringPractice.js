const nonRepeatSubstring = str => {
    let windowStart = 0,
        maxLength = 0,
        charIndexMap = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];

        if (rightChar in charIndexMap) {

            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
        }

        charIndexMap[rightChar] = windowEnd;

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    return maxLength;
}