/*
Implement a function mean(array) that returns the mean (also known as average) of the values inside array, which is an array of numbers.

Arguments
array (Array): Array of numbers.
Returns
(Number): Returns the mean of the values in array.

Examples
mean([4, 2, 8, 6]); // => 5
mean([1, 2, 3, 4]); // => 2.5
mean([1, 2, 2]); // => 1.6666666666666667
The function should return NaN if array is empty.


mean([]); // => NaN
/*

/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export function mean(array) {
    // Return NaN if the array is empty
    if (array.length === 0) {
        return NaN;
    }

    // Initialize sum
    let sum = 0;

    // Loop through the array to sum the numbers
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    // Calculate mean by dividing sum by the number of elements
    let meanOfArray = sum / array.length

    return meanOfArray
}

console.log(mean([4, 2, 8, 6]));




// More efficient way
export function mean2(array) {
    // Return NaN if the array is empty
    if (array.length === 0) {
        return NaN;
    }

    // Use reduce to calculate the sum and then divide by the length
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / array.length;
}

console.log(mean2([4, 2, 8, 6]));