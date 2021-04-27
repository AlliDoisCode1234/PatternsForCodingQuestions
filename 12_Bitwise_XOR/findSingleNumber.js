function find_single_number(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num ^= arr[i];
    }
    return num;
}