// https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
var removeElement = function(nums, val) {

    // Initialize the counter for non-val elements
    let k = 0;

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) { // Check if the current element is not equal to val
            nums[k] = nums[i]; // Place it at the k-th position
            k++; // Increment the counter
        }
    }
    return k; // Return the count of non-val elements
};

let nums = [3, 2, 2, 3]
let val = 3
let k = removeElement(nums, val);

console.log(k);
console.log(nums.slice(0, k));

