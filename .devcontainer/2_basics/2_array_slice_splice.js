
const myArr = [1,2,3,4,5,6]

console.log("A",myArr);

const myn1 = myArr.slice(2,4)
console.log(myn1);

console.log("B ",myArr);

const myn2 = myArr.splice(1,4,8,9)
console.log("C",myArr);
console.log(myn2);



/* 
slice=======================================================>

Purpose: Ek naya array banata hai original array se ek portion ka copy lekar.
Mutate: Original array ko change nahi karta.
Syntax: array.slice(start, end)
start: Starting index (inclusive).
end: Ending index (exclusive).
Example:

javascript====>
Copy code
let numbers = [1, 2, 3, 4, 5];
let sliced = numbers.slice(1, 4); // [2, 3, 4]


splice===========================================================>

Purpose: Array ke content ko remove ya add karta hai.
Mutate: Original array ko change karta hai.
Syntax: array.splice(start, deleteCount, item1, item2, ...)
start: Index jahan se change shuru hoga.
deleteCount: Kitne elements remove karne hain.
item1, item2, ...: Add karne ke liye new elements.


javascript========>
Copy code
let numbers = [1, 2, 3, 4, 5];
let spliced = numbers.splice(1, 2, 6, 7); // [2, 3]
// numbers ab ho gaya [1, 6, 7, 4, 5]

Summary===>
    
slice: Non-destructive, ek naya array banata hai.
splice: Destructive, original array ko modify karta hai.
*/