/**
 * High Order Function --> A function that takes in parameter a function , is called a high order function.
 */

// 2. 
// const nums = [3, 10, 24, 90, 80, 34, 67]

// const result = nums.forEach(
//     function (e) {
//         if (e % 2 === 0) {
//             console.log(e)
//         }
//     }
// )

// function forEach(fn) {
//     for (let i = 0; i < nums.length; i++) {
//         const currentElement = nums[i]
//         console.log(currentElement);
//         fn(currentElement)
//     }
// }

// 1.
const nums2 = [3, 10, 24, 90]

const result2 = nums2.map(e => e * 10 + 1)

console.log("Result: ", result2);

function map(fn) {
    const result = [];

    for (let i = 0; i < nums2.length; i++) {
        const currentElem = nums2[i];
        const num = fn(currentElem);
        result.push(num);
    }

    return result;
}

