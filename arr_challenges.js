//* ❓ Double Trouble 
/* ------------------------------- description ------------------------------ */
/* 
Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

! Work through the array from left to right.

! Return the resulting array.
*/

function trouble(arr, target){
    // start a loop through arr 
    for (let i=0; i<arr.length; i++){ 
    // check consecutive elements
      // bracket notation allows us to use the result of the expression to grab the value of the next element
      if (arr[i] + arr[i + 1] === target) {
        // remove the second of the consecutive numbers 
        arr.splice(i + 1, 1);
        // decrement i, so we don't move the other elements 
        i--; 
      }
    }
    // arr is mutated as a result of the loop, we can return it
    return arr;
}

//* ❓ Even Times Last 

/* ------------------------------- description ------------------------------ */
/*
Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the sequence is empty, you should return 0.

* this one should be fairly easy, we can use `filter` and `reduce` again
*/

function evenLast(numbers) {
    // grab the last element and isolate it 
    const lastIndex = numbers[numbers.length -1]; 
    // create an array of all the numbers with an even index 
    // in the callback function pass element and index, filter by index that when divided by 2 have no remainder (are even)
    const evenIndexNums = numbers.filter((el, index) => index % 2 === 0); 
    
    // The reduce array method returns a single value
    return evenIndexNums.reduce((a, b) => {
      // reduce takes in a (the accumulator - starts at 0) and b (elements of evenIndexNums)
      // multiply current element by the last index
      // this is the action we're performing on each element of the array
      b = b * lastIndex
      // add it to the accumulator and continue
      return a + b; 
    }, 0);
}

//TODO 🧨💪 Can you one-line it? 