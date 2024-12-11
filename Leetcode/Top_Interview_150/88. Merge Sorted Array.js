function merge(nums1, m, nums2, n) {
    // Combine the first m elements of nums1 with all elements of nums2
    let combined = nums1.slice(0, m).concat(nums2);

    // Sort the combined array
    combined.sort((a, b) => a - b);

    // Copy the sorted elements back into nums1
    for (let i = 0; i < combined.length; i++) {
        nums1[i] = combined[i];
    }
};

// Input arrays and paramters
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 3, 5, 6]
let n = 4;

merge(nums1, m, nums2, n)
console.log(nums1);


















// function merge(nums1, m, nums2, n) {
//     // form a new array
//     let combined = nums1.slice(0, m).concat(nums2)

//     // sort new array
//     combined.sort((a, b) => a-b)

//     // make nums1 same as new array

//     return combined;
// }

// // Input arrays and paramters
// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 3, 5, 6]
// let n = 4;

// console.log(merge(nums1, m, nums2, n));



// let unsortedArray = [3, 6, 4, 10, 2, 44]

// function sortArray() {
//     return unsortedArray.sort((a, b) => b - a);
// }

// console.log(sortArray(unsortedArray));


// let letterArray = ['w', 'b', 'r', 'h', 'a']

// console.log(letterArray.sort());
