const remove_duplicates = arr => {

    let nextNonDuplicate = 1,
        next = 1;

    while (next < arr.length) {
        
        if (arr[nextNonDuplicate - 1] !== arr[next]) {
            arr[nextNonDuplicate] = arr[next];
            nextNonDuplicate += 1;
        }
        next += 1;
    }

    return nextNonDuplicate;
}