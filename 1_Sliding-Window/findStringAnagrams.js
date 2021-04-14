const find_string_anagrams = (str, pattern) => {
    let windowStart = 0,
        matched = 0,
        charFrequency = {};

    for (let i = 0; i < pattern.length; i++){
        const chr = pattern[i];
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }

    const resultIndices = [];

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            // decrement the frequency of matched char
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] === 0) {
                matched += 1;
            }
        }


        if (matched === Object.keys(charFrequency).length) { // have we found an anagram?
            resultIndices.push(windowStart);
        }

        // shrink the sliding window
        if (windowEnd >= pattern.length - 1) {
            leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1; // before putting the character back, decrement the matched count
                }
                charFrequency[leftChar] += 1; // put the char back
            }
        }
    }
    return resultIndices;
}