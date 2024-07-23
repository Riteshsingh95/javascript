
const myArr = [5, 7, 3, 2, 1]

// console.log(myArr);

// Array methods
/*
myArr.push(8)   // push new value ko add karne k liye hota hai
myArr.push(10)
myArr.push(4)
myArr.push(12)
myArr.pop()  // pop last value ko remove krta jaata hai
*/
myArr.unshift(100)  // unshift new values ko array k starting mein add krta hai
myArr.shift()    // shift jo new value array k starting mein add hoti hai usko remove krta hai 

/*
console.log(myArr.includes(9));   // includes function se hm pta krte hain ki kaun ,
// si value hamre array mein hai kaun si nahi 

console.log(myArr.indexOf(3));  // ye array elements ki index batata hai

*/
console.log("my arr is:");
console.log(myArr);

const newArr = myArr.join()  // join function all array elements ko string mein convert ke deta hai
console.log(newArr);

