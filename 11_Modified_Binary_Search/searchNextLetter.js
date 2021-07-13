const search_next_letter = (letters, key) => {
    const n = letters.length;

    if (key < letters[0] || key > letter[n - 1]) {
        return letters[0]
    }

    let start = 0,
        end = n - 1;
    
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (key < letters[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return letters[start % n];
}