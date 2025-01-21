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
export default function mean(array) {
    // Return NaN if the array is empty
    if (array.length === 0) {
        return NaN;
    }

    // loop through array to multiply numbers together
    for (let i = 0; i < array.length; i++) {
        result *= array[i]
    }

    // divide result by array length + 1
    let number = result / (array.length + 1)

    return number
}

console.log(mean([4, 2, 8, 6]));
