const find_permutation = function(str, pattern) {

    let windowStart = 0,
        patternFrequency = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
        const rightChar = str[windowEnd];
        
        if (!(rightChar in patternFrequency)){
            patternFrequency[rightChar] = 0
        }
        patternFrequency[rightChar] += 1;

        while (windowEnd - windowStart + 1 > pattern.length){

        }
    }

    return false;
  };
  