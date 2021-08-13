const findPermutation = (str, pattern) => {
    let windowStart = 0,
        matched = 0,
        minLength = str.length + 1,
        charFrequency = {};

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        if(!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }

    // try to extend the range [windowStart, windowEnd]
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++){
       const rightChar = str[windowEnd];

        if(rightChar in frequencyMap) {
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] >= 0) { // Count every matching of a charachter
                matched += 1;
            }
        }

        // Shrink the window if we can, finish as soon as we remove a matched character
        while (matched === pattern.length) {
            if (minLength > windowEnd - windowStart + 1) {
                minLength = windowEnd - windowStart + 1;
                substrStart = windowStart;
            }

            const leftChar = str[windowStart]
            windowStart += 1;
            if (leftChar in charFrequency) {
                // Note that we could have redundant matching characters, we'll decrement the
                // matched count only when a useful occurrence of a matched character is going out of the window 
                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                charFrequency[leftChar] += 1;
            }
        }
    }
    if (minLength > str.length) {
        return '';
    }
    return str.substring(substrStart, substrStart + minLength);
}

