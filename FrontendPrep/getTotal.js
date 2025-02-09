// Write a javascript function to get the total of given arguments like total(2,3,4,5)(4,5,6)

function getTotal(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }

    return function (...ar) {
        for (let i = 0; i < ar.length; i++) {
            sum += ar[i]
        }
        return sum;
    }
}

// Log-
console.log(getTotal(2, 3, 4, 5)(4, 5, 6)); // Output: 29
