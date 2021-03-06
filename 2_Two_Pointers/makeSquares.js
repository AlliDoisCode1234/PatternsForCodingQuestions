// O(N) time | O(N) space - where N is the number of elements in the array

const make_squares = arr => {
    const n = arr.length,
          squares = Array(n).fill(0);
    let highestSquareIdx = n - 1,
        left = 0,
        right = n - 1;
    
    while (left <= right) {
        let leftSquare = arr[left] * arr[left],
            rightSquare = arr[right] * arr[right];
            if (leftSquare > rightSquare) {
                squares[highestSquareIdx] = leftSquare;
                left += 1;
            } else {
                squares[highestSquareIdx] = rightSquare;
                right -= 1;
            }
            highestSquareIdx -= 1;
    }

    return squares
}