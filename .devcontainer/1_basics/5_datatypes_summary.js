// primitive datatypes

// 7 types: string , boolean , Number , Null , undefined , symbol , BigInt

/* symbol */

const id = Symbol("123")
const anotherid = Symbol("123")

console.log(id === anotherid);  // it is not equal

// console.log(id);

// Refrence (Non Primitive) datatypes

//  Array , Objects , Function

const superheros=["thor","spiderman","Hulk"] // it is an array

let myobj = {      /*************** object *****************/
    name:"Ritesh",
    age :22,
    city : "Gorakhpur",
}

console.log(myobj);

const myfunc =function() {       /************** function ****************/
    console.log("hello world");
}


console.log(myfunc);

myfunc();   // function call

console.log(typeof myobj);