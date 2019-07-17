const result = [];

const findSum = (arr, val) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] === val) {
                result.push([i,j])
            }
        }
    }
    return result;
};

console.log(findSum([7, 4, 8, 4, 5], 12));
