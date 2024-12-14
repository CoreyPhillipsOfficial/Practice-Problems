// O(m + n) run time
function merge(nums1, m, nums2, n) {
    // Pointers for nums1, nums2, and the end of nums1
    let p1 = m - 1; // Last valid element in nums1
    let p2 = n - 1; // Last element in nums2
    let p = m + n - 1; // Last position in nums1

    // Merge nums1 and nums2 from the end
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // If there are remaining elements in nums2, copy them
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}









// // Simple solution
// function merge(nums1, m, nums2, n) {
//     // Combine the first m elements of nums1 with all elements of nums2
//     let combined = nums1.slice(0, m).concat(nums2.slice(0, n));

//     // Sort the combined array
//     combined.sort((a, b) => a - b);

//     // Copy the sorted elements back into nums1
//     for (let i = 0; i < combined.length; i++) {
//         nums1[i] = combined[i];
//     }
// };

// // Input arrays and paramters
// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 3, 5, 6]
// let n = 4;

// merge(nums1, m, nums2, n)
// console.log(nums1);


















// function merge(nums1, m, nums2, n) {
//     // form a new array
//     let combined = nums1.slice(0, m).concat(nums2)

//     // sort new array
//     combined.sort((a, b) => a-b)

//     // make nums1 same as new array
//     for (i = 0; i < combined.length; i++) {
//         nums1[i] = combined[i]
//     }
// }

// // Input arrays and paramters
// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 3, 5, 6]
// let n = 4;

// merge(nums1, m, nums2, n);
// console.log(nums1);






// var merge = function(nums1, m, nums2, n) {
//     // slice the two arrays and put them together in a new array
//     let combinedArray = nums1.slice(0, m).concat(nums2.slice(0, n));

//     // sort new array
//     combinedArray.sort((a, b) => a - b);

//     // copy the sorted elements into nums1
//     for (i = 0; i < combinedArray.length; i++) {
//         nums1[i] = combinedArray[i]
//     }
// };

// let nums1 = [1,2,3,0,0,0];
// let m = 3; 
// let nums2 = [2,5,6];
// let n = 3;

// merge(nums1, m, nums2, n);
// console.log(nums1);

















// let unsortedArray = [3, 6, 4, 10, 2, 44]

// function sortArray() {
//     return unsortedArray.sort((a, b) => b - a);
// }

// console.log(sortArray(unsortedArray));


// let letterArray = ['w', 'b', 'r', 'h', 'a']

// console.log(letterArray.sort());
