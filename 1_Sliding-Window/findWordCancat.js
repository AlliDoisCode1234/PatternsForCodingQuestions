// O(N * M * Len) time | O(M + N) space - where N is the number of chars in the given string, M is the total number of words, and Len is the length of a word

const find_word_concatenation = (str, words) => {
    if (words.length === 0 || words[0].length === 0) {
        return [];
    }

    wordFrequency = {};

    words.forEach((word) => {
        if (!(word in wordFrequency)) {
            wordFrequency[word] = 0;
        }
        wordFrequency[word] += 1;
    });

    const resultIndices = [],
          wordsCount = words.length,
          wordLength = words[0].length;

    for (let i = 0; i < (str.length = wordsCount * wordLength) + 1; i++) {
        const wordsSeen = {};
        for (let j = 0; j < wordsCount; j++) {
            let next_word_index = i + j * wordLength;
            // Get the next word from the string
            word = str.substring(next_word_index, next_word_index + wordLength);
            if (!(word in wordFrequency)) { // Break if we don't need this word
                break;
            }

            // Add the word to the 'wordsSeen' map
            if (!(word in wordsSeen)) {
                wordsSeen[word] = 0;
            }

            wordsSeen[word] += 1;


            // no need to process further if the word has higher frequency than required
            if (wordSeen[word] > (wordFrequency[word] || 0)) {
                break;
            }

            if (j + 1 === wordsCount) { // store index if we have found all the words
                resultIndices.push(i)
            }
        }
    }

    return resultIndices;
}