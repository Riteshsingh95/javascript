
/****************scope****************/

/****************************globle scope*********************************/

const a= 10000
let b= 2000
var c= 300


/******************************block scope**********************************/

if (true) {
const a= 10
let b= 20
var c= 30
console.log(`inner:`,c);
console.log(`block b:`,b);
console.log(`block a:`,a);
    
}


console.log(`globle a:`,a);
console.log(`globle b:`,b);
console.log(c);