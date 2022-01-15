//shuffle
//In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize 
//the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. 
//Work in-place, naturally. Do you need to return anything from your function?

// function shuffle(arr) {
//     let arr_copy = [...arr];
//     let indices = [];
//     let next_idx = Math.floor(Math.random()*arr.length);
//     while(indices.length < arr.length) {
//         next_idx = Math.floor(Math.random()*arr.length);
//         if (!indices.includes(next_idx)) {
//             console.log(indices.length);
//             indices.push(next_idx);
//         }
//     }
//     for(var i = 0; i < arr.length; i++) {
//         arr[i] = arr_copy[indices[i]];
//     }
//     for(var i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// let arr = [33, -5, 0, -12, 2, 53];
// shuffle(arr);

// Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, 
// starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, 
// behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array 
// containing heights of buildings you can see, in order. 
// Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

// function lovelyB(arr) {
//     let currMax = 0;
//     let canSee = [];
//     for(var i = 0; i < arr.length; i++) {
//         if (arr[i] > currMax) {
//             canSee.push(arr[i]);
//             currMax = arr[i];
//         }
//     }
//     return canSee;
// }

// let testArr = [-1,1,1,7,3];
// console.log(lovelyB(testArr));

//Zip It
// Create a standalone function that accepts two arrays and combines their values sequentially into a new array. Extra values from either 
// array should be included afterward. 
// Given [4,15,100] and [10,20,30,40], return new array containing [4,10,15,20,30,40,100].

// function zipIt(arr) { //merge sort function from https://www.section.io/engineering-education/sorting-algorithms-in-js/

//     let min;

//     for (let i = 0; i < arr.length; i++) {
//         min = i;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }

//         if (min !== i) {
//             [arr[i], arr[min]] = [arr[min], arr[i]];
//         }
//     }

//     return arr;
// }

// function mergeArrays(arr1, arr2) { // in case using concat is a no-no
//     arr3 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         arr3.push(arr1[i]);
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         arr3.push(arr2[i]);
//     }
//     return arr3;
// }

// arr1 = [4,15,100, 0, -22];
// arr2 = [10,20,30,40, -2];
// // arr3 = arr1.concat(arr2);
// arr3 = mergeArrays(arr1, arr2);
// console.log(zipIt(arr3));

// Credit Card Validation (Bonus)
// The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an 
// array of digits on the card (13-19 depending on the card), and 
// returns a boolean whether the card digits satisfy the Luhn formula, as follows:

// Set aside the last digit; do not include it in these calculations (until step 5);
// Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
// If any results are larger than 9, subtract 9 from them;
// Add all numbers (not just our odds) together;
// Now add the last digit back in – the sum should be a multiple of 10.
// For example, when given digit array [5,2,2,8,2], after step 1) it becomes [5,2,2,8], then after step 2) it is [5,4,2,16]. 
// Post-3) we have [5,4,2,7], then following 4) it becomes 18. After step 5) our value is 20, so ultimately we return true. 
// If the final digit were any non-multiple-of-10, we would instead return false.

function isCreditCarValid(digitArr) {
    copyArr = [...digitArr];
    for (let i = copyArr.length - 2; i > 0; i-=2) {
        copyArr[i]*=2;
        if (copyArr[i] > 9) {
            copyArr[i] -= 9;
        }
    }
    let arrSum = 0;
    for (let i = 0; i < copyArr.length; i++) {
        arrSum += copyArr[i];
    }
    // console.log(arrSum);
    return arrSum % 10===0;
}

let arr = [5,2,2,8,2];
console.log(isCreditCarValid(arr));